"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const HIDE_UNTIL_KEY = "eml-recruitment-hide-until";

function isHiddenToday() {
  try {
    const hideUntil = Number(window.localStorage.getItem(HIDE_UNTIL_KEY));
    return Number.isFinite(hideUntil) && Date.now() < hideUntil;
  } catch {
    // Storage blocked (private mode, strict settings): show the notice as before.
    return false;
  }
}

function hideUntilTomorrow() {
  const nextMidnight = new Date();
  nextMidnight.setHours(24, 0, 0, 0);
  try {
    window.localStorage.setItem(HIDE_UNTIL_KEY, String(nextMidnight.getTime()));
  } catch {
    // Storage blocked: the notice simply closes for this visit.
  }
}

// Storage is read once per render; nothing needs to be subscribed to.
const subscribeToNothing = () => () => {};

export default function RecruitmentModal() {
  // The static HTML is rendered as "hidden"; the browser then decides,
  // so the server output and the first client render always agree.
  const hiddenToday = useSyncExternalStore(
    subscribeToNothing,
    isHiddenToday,
    () => true,
  );
  const [isDismissed, setIsDismissed] = useState(false);
  const isOpen = !hiddenToday && !isDismissed;
  const close = () => setIsDismissed(true);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="recruitment-modal-backdrop" role="presentation" onMouseDown={() => close()}>
      <section
        className="recruitment-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruitment-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="recruitment-modal-close" type="button" aria-label="Close recruitment notice" onClick={() => close()}>
          <span aria-hidden="true">×</span>
        </button>

        <div className="recruitment-modal-body">
          <p className="recruitment-kicker">NOW RECRUITING</p>
          <div className="recruitment-title-row">
            <h2 id="recruitment-modal-title">
              <strong>Energy Materials Lab</strong><br />
              함께 연구할 학생을 모집합니다.
            </h2>
            <Image className="recruitment-title-logo" src="/images/eml-logo-blue.png" alt="Energy Materials Lab" width={1164} height={768} priority />
          </div>

          <div className="recruitment-summary" aria-label="Recruitment information">
            <div>
              <span>모집 대상</span>
              <strong>학부연구생, 석·박사통합과정생</strong>
            </div>
            <div>
              <span>입학 시기</span>
              <strong>2026학년도 2학기 · 2027학년도 1학기</strong>
            </div>
          </div>

          <div className="recruitment-description">
            <p className="recruitment-description-en">
              Our group is recruiting graduate students and undergraduate researchers interested in rechargeable batteries, energy materials, first-principles calculations, and machine learning.
            </p>
            <p lang="ko">
              우리 연구실은 함께 연구할 대학원생과 학부연구생을 모집하고 있습니다. 이차전지, 에너지소재, 제일원리계산 및 머신러닝에 관심이 있는 학생은 CV와 간단한 자기소개를 보내주세요.
            </p>
          </div>

          <div className="recruitment-modal-footer">
            <p><span>지원 및 문의</span> byunghoonkim@skku.edu</p>
            <div className="recruitment-modal-actions">
              <Link href="/research" onClick={() => close()}>Research areas <span aria-hidden="true">↗</span></Link>
              <a className="recruitment-apply-button" href="mailto:byunghoonkim@skku.edu?subject=Energy%20Materials%20Lab%20Application">Apply via email <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="recruitment-modal-dismiss">
            <button
              type="button"
              onClick={() => {
                hideUntilTomorrow();
                close();
              }}
            >
              오늘 하루 보지 않기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
