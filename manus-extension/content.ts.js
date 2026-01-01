var et=Object.defineProperty;var tt=(r,t,e)=>t in r?et(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var B=(r,t,e)=>tt(r,typeof t!="symbol"?t+"":t,e);import{l as L,b as nt}from"./sendMessage.js";import{i as it}from"./typeGuards.js";const rt=`/* ===== CSS 变量定义（从 colors.css 复制）===== */
/* 浅色模式变量（默认） */
:host {
  /* Text Colors */
  --text-primary: #34322d;
  --text-secondary: #5e5e5b;
  --text-tertiary: #858481;
  --text-disable: #b9b9b7;
  --text-blue: #0081f2;
  --text-onblack: #ffffff;
  --text-white: #ffffff;
  --text-white-tsp: #ffffff60;
  --theme-text-primary: #262626;
  --theme-text-quaternary: #8c8c8c;
  --logo-color: #34322d;
  --text-shining: #e5e5e5;

  /* Background Colors */
  --background-gray-main: #f8f8f7;
  --background-white-main: #ffffff;
  --background-menu-white: #ffffff;
  --background-menu-gray: #f8f8f7;
  --background-tsp-menu-white: #ffffff14;
  --background-tsp-card-gray: #37352f0a;
  --background-nav: #ebebeb;
  --background-card: #fafafa;
  --background-mask-black: #000000a6;
  --background-mask-white: #f8f8f7a6;
  --background-card-gray: #fafafa;
  --background-preview-mask: #000000d9;

  /* Border Colors */
  --border-main: #0000000f;
  --border-white: #ffffff33;
  --border-btn-main: #0000001f;
  --border-input-active: #0081f280;
  --border-light: #0000000a;
  --border-dark: #0000001f;
  --border-primary: #4f59661f;

  /* Icon Colors */
  --icon-primary: #34322d;
  --icon-secondary: #5e5e5b;
  --icon-tertiary: #858481;
  --icon-disable: #b9b9b7;
  --icon-blue: #0081f2;
  --icon-onblack: #ffffff;
  --icon-white: #ffffff;
  --icon-white-tsp: #ffffff60;

  /* Function Colors */
  --function-error: #f25a5a;
  --function-success: #25ba3b;
  --function-warning: #efa201;
  --function-error-tsp: #f25a5a14;
  --function-warning-tsp: #efa2011f;
  --function-success-tsp: #25ba3b14;

  /* Fill Colors */
  --fill-blue: #0081f214;
  --fill-tsp-white-main: #37352f0f;
  --fill-tsp-white-dark: #37352f14;
  --fill-tsp-white-light: #37352f0a;
  --fill-tsp-gray-dark: #37352f14;
  --fill-tsp-gray-main: #37352f0a;
  --fill-input-chat: #ffffff;
  --fill-white: #ffffff;
  --fill-black: #28282973;
  --fill-gray: #f8f8f7;

  /* Button Colors */
  --Button-primary-black: #1a1a19;
  --Button-primary-white: #ffffff;
  --Button-primary-brand: #0081f2;
  --Button-primary-brand-disabled: #7cbdf5;
  --Button-secondary-brand: #0081f21a;
  --Button-secondary-error-border: #f25a5a80;
  --Button-secondary-error-fill: #ffffff;
  --Button-secondary-main: #ffffff;
  --Button-secondary-gray: #37352f0f;

  /* Tab Colors */
  --tab-fill: rgba(0, 0, 0, 0.04);
  --tab-active-black: #1a1a19;

  /* Shadow Colors */
  --shadow-L: #0000003d;
  --shadow-M: #0000001f;
  --shadow-S: #00000014;
  --shadow-XS: #0000000f;
  --shadows-inner-0: #ffffff00;
  --shadows-inner-1: #16191d14;
  --shadows-inner-2: #16191d1f;
  --shadows-drop-1: #16191d08;
  --shadows-drop-2: #16191d0a;
  --shadows-drop-3: #16191d14;
  --shadows-drop-4: #16191d1f;
  --shadows-highlight-1: #cce5ff;
  --shadows-highlight-2: #1487fa;
  --shadows-danger-1: #fed7d7;
  --shadows-danger-2: #ee3a3a;
  --shadows-card-border: #16191d1f;
  --shadows-card-border-2: #16191d1f;

  /* Tooltips */
  --Tooltips-main: #000000e6;

  /* Gradual Colors */
  --gradual-white-0: #ffffff00;
  --gradual-gray-100: #ffffff00;
  --gradual-gray-0: #ffffff00;
  --gradual-dark-20: #00000033;

  /* input */
  --fill-input-chat: #ffffff;

  /* gradient */
  --gradient-bg-mask-gray-0: #eaeaeb00;

  --gradual-white-menu-0: #ffffff00;
}

/* 暗色模式变量（通过媒体查询自动响应系统主题） */
@media (prefers-color-scheme: dark) {
  :host {
    /* Text Colors */
    --text-primary: #dadada;
    --text-secondary: #acacac;
    --text-tertiary: #7f7f7f;
    --text-disable: #5f5f5f;
    --text-blue: #1a93fe;
    --text-onblack: #000000e6;
    --text-white: #ffffff;
    --text-white-tsp: #ffffff60;
    --theme-text-primary: #dbdbdb;
    --theme-text-quaternary: #7a7a7a;
    --logo-color: #dadada;
    --text-shining: #474747;

    /* Background Colors */
    --background-gray-main: #272728;
    --background-white-main: #161618;
    --background-menu-white: #383739;
    --background-menu-gray: #272728;
    --background-tsp-menu-white: #ffffff0f;
    --background-tsp-card-gray: #ffffff0f;
    --background-nav: #212122;
    --background-card: #383739;
    --background-mask-black: #000000a6;
    --background-mask-white: #272728a6;
    --background-card-gray: #383739;
    --background-preview-mask: #000000d9;

    /* Border Colors */
    --border-main: #ffffff14;
    --border-white: #00000014;
    --border-btn-main: #ffffff1a;
    --border-input-active: #1a93fe80;
    --border-light: #ffffff0f;
    --border-dark: #ffffff29;
    --border-primary: #56565f52;

    /* Icon Colors */
    --icon-primary: #dadada;
    --icon-secondary: #acacac;
    --icon-tertiary: #7f7f7f;
    --icon-disable: #5f5f5f;
    --icon-blue: #1a93fe;
    --icon-onblack: #000000d9;
    --icon-white: #ffffff;
    --icon-white-tsp: #ffffff60;

    /* Function Colors */
    --function-error: #eb4d4d;
    --function-success: #5eb92d;
    --function-warning: #ffbf36;
    --function-error-tsp: #eb4d4d14;
    --function-warning-tsp: #ffbf361f;
    --function-success-tsp: #25ba3b1f;

    /* Fill Colors */
    --fill-blue: #1a93fe1f;
    --fill-tsp-white-main: #ffffff0f;
    --fill-tsp-white-dark: #ffffff1f;
    --fill-tsp-white-light: #ffffff0a;
    --fill-tsp-gray-dark: #00000047;
    --fill-tsp-gray-main: #00000033;
    --fill-input-chat: #363537;
    --fill-white: #3e3d3e;
    --fill-black: #28282973;
    --fill-gray: #444345;

    /* Button Colors */
    --Button-primary-black: #ffffff;
    --Button-primary-white: #ffffff14;
    --Button-primary-brand: #1a93fe;
    --Button-primary-brand-disabled: #215d93;
    --Button-secondary-brand: #1a93fe1f;
    --Button-secondary-error-border: #eb4d4d29;
    --Button-secondary-error-fill: #eb4d4d1f;
    --Button-secondary-main: #ffffff1f;
    --Button-secondary-gray: #ffffff0f;

    /* Tab Colors */
    --tab-fill: rgba(255, 255, 255, 0.06);
    --tab-active-black: #ffffff;

    /* Shadow Colors */
    --shadow-L: #00000066;
    --shadow-M: #0000003d;
    --shadow-S: #00000029;
    --shadow-XS: #0000001f;
    --shadows-inner-0: #ffffff1f;
    --shadows-inner-1: #ffffff14;
    --shadows-inner-2: #ffffff1f;
    --shadows-drop-1: #0000001f;
    --shadows-drop-2: #00000033;
    --shadows-drop-3: #00000047;
    --shadows-drop-4: #0000005c;
    --shadows-highlight-1: #1b61a6;
    --shadows-highlight-2: #1487fa;
    --shadows-danger-1: #8f1919;
    --shadows-danger-2: #ee3a3a;
    --shadows-card-border: #ffffff1f;
    --shadows-card-border-2: #ffffff00;

    /* Tooltips */
    --Tooltips-main: #000000e6;

    /* Gradual Colors */
    --gradual-white-0: #27272800;
    --gradual-gray-100: #444345;
    --gradual-gray-0: #44434500;
    --gradual-dark-20: #ffffff33;

    /* input */
    --fill-input-chat: #363537;

    /* gradient */
    --gradient-bg-mask-gray-0: #1e1e1e00;

    --gradual-white-menu-0: #38373900;
  }
}

/* ===== 原有组件样式 ===== */
:host {
  all: initial;
}

/* Mask layer styles */
.manus-action-mask-interaction {
  position: fixed;
  inset: 0;
  background-color: transparent;
  pointer-events: none;
  cursor: wait;
  z-index: 1;
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.manus-action-mask-interaction.manus-action-mask-visible {
  pointer-events: auto;
  opacity: 1;
}

/* Blue effect background styles */
.manus-action-mask-blue-effects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 140ms ease-in;
  display: block;
  z-index: 2;
}

.manus-action-mask-blue-effects.manus-action-mask-visible {
  opacity: 1;
  transition: opacity 200ms ease-out;
}

.manus-action-mask-blue-effects::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--manus-action-mask-effect-radius, 12px);
  pointer-events: none;
  box-shadow:
    inset 0 0 40px rgba(0, 129, 242, 0.16),
    inset 0 0 120px rgba(0, 129, 242, 0.08);
}

.manus-action-mask-blue-effects__edge {
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.manus-action-mask-blue-effects__edge--top,
.manus-action-mask-blue-effects__edge--bottom {
  left: 0;
  right: 0;
  height: var(--manus-action-mask-edge-size, 100px);
  border-radius: inherit;
}

.manus-action-mask-blue-effects__edge--top {
  top: 0;
  background: linear-gradient(
    to bottom,
    var(--manus-action-mask-edge-color, rgba(0, 129, 242, 0.3)) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.manus-action-mask-blue-effects__edge--bottom {
  bottom: 0;
  background: linear-gradient(
    to top,
    var(--manus-action-mask-edge-color, rgba(0, 129, 242, 0.3)) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.manus-action-mask-blue-effects__edge--left,
.manus-action-mask-blue-effects__edge--right {
  top: 0;
  bottom: 0;
  width: var(--manus-action-mask-edge-size, 100px);
}

.manus-action-mask-blue-effects__edge--left {
  left: 0;
  background: linear-gradient(
    to right,
    var(--manus-action-mask-edge-color, rgba(0, 129, 242, 0.3)) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.manus-action-mask-blue-effects__edge--right {
  right: 0;
  background: linear-gradient(
    to left,
    var(--manus-action-mask-edge-color, rgba(0, 129, 242, 0.3)) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

/* Action bar styles */
.manus-action-mask-action-bar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: auto;
  opacity: 0;
  transition: opacity 140ms ease-in;
  background: var(--background-menu-white);
  border-radius: 12px;
  border: 0.5px solid var(--border-btn-main);
  padding: 8px 8px 8px 16px;
  min-width: 400px;
  box-shadow:
    0 4px 6px -1px var(--shadow-M),
    0 2px 4px -1px var(--shadow-S);
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  z-index: 3;
}

.manus-action-mask-action-bar.manus-action-mask-visible {
  opacity: 1;
  transition: opacity 200ms ease-out;
}

.manus-action-mask-action-bar__left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.manus-action-mask-action-bar__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.manus-action-mask-action-bar__icon {
  width: 20px;
  height: 20px;
  color: var(--icon-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.manus-action-mask-action-bar__status {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
}

.manus-action-mask-action-bar__button {
  display: flex;
  min-width: 64px;
  min-height: 32px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--function-error);
  color: var(--text-white);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 150ms ease;
  flex-shrink: 0;
}

.manus-action-mask-action-bar__button:hover {
  background: color-mix(in srgb, var(--function-error) 90%, #000000);
}

.manus-action-mask-action-bar__button:active {
  background: color-mix(in srgb, var(--function-error) 80%, #000000);
}

.manus-action-mask-action-bar__button--black {
  background: var(--Button-primary-black);
  color: var(--text-onblack);
}

.manus-action-mask-action-bar__button--black:hover {
  background: color-mix(in srgb, var(--Button-primary-black) 85%, #ffffff);
}

.manus-action-mask-action-bar__button--black:active {
  background: color-mix(in srgb, var(--Button-primary-black) 75%, #000000);
}

/* 暗色模式下白色按钮的 hover 效果需要混合黑色 */
@media (prefers-color-scheme: dark) {
  .manus-action-mask-action-bar__button--black:hover {
    background: color-mix(in srgb, var(--Button-primary-black) 90%, #000000);
  }

  .manus-action-mask-action-bar__button--black:active {
    background: color-mix(in srgb, var(--Button-primary-black) 80%, #000000);
  }
}

.manus-action-mask-action-bar__button--stop {
  display: flex;
  min-width: 64px;
  min-height: 32px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--function-error);
  color: var(--text-white);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 150ms ease;
  flex-shrink: 0;
}

.manus-action-mask-action-bar__button--stop:hover {
  background: color-mix(in srgb, var(--function-error) 90%, #000000);
}

.manus-action-mask-action-bar__button--stop:active {
  background: color-mix(in srgb, var(--function-error) 80%, #000000);
}

/* Resume modal styles */
.manus-action-mask-resume-modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  z-index: 10;
  background-color: var(--background-mask-black);
}

.manus-action-mask-resume-modal.manus-action-mask-modal-visible {
  display: flex;
}

.manus-action-mask-resume-modal__content {
  width: 480px;
  max-width: 70vw;
  background: var(--background-gray-main);
  border: 1px solid var(--border-btn-main);
  border-radius: 20px;
  box-shadow: 0 20px 60px var(--shadow-M);
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.manus-action-mask-resume-modal__header {
  padding: 20px 16px 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.manus-action-mask-resume-modal__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  line-height: 24px;
  letter-spacing: -0.45px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  flex: 1;
}

.manus-action-mask-resume-modal__body {
  padding: 0 20px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.manus-action-mask-resume-modal__description {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-top: 12px;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 20px;
  letter-spacing: -0.154px;
}

.manus-action-mask-resume-modal__textarea {
  min-height: 90px;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.154px;
  resize: none;
  outline: none;
  background: var(--fill-tsp-white-main);
  color: var(--text-primary);
}

.manus-action-mask-resume-modal__textarea::placeholder {
  color: var(--text-disable);
}

.manus-action-mask-resume-modal__textarea:focus {
  border-color: transparent;
  background: var(--fill-tsp-white-dark);
}

.manus-action-mask-resume-modal__footer {
  display: flex;
  justify-content: flex-end;
}

.manus-action-mask-resume-modal__submit {
  min-height: 36px;
  min-width: 72px;
  margin-top: 20px;
  padding: 8px 12px;
  background: var(--Button-primary-black);
  color: var(--text-onblack);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.154px;
  transition: background-color 150ms ease;
}

.manus-action-mask-resume-modal__submit:hover {
  background: color-mix(in srgb, var(--Button-primary-black) 85%, #ffffff);
}

.manus-action-mask-resume-modal__submit:active {
  background: color-mix(in srgb, var(--Button-primary-black) 75%, #000000);
}

/* 暗色模式下白色按钮的 hover 效果需要混合黑色 */
@media (prefers-color-scheme: dark) {
  .manus-action-mask-resume-modal__submit:hover {
    background: color-mix(in srgb, var(--Button-primary-black) 90%, #000000);
  }

  .manus-action-mask-resume-modal__submit:active {
    background: color-mix(in srgb, var(--Button-primary-black) 80%, #000000);
  }
}

/* Pulsing animation for blue effects */
@keyframes manus-pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.manus-action-mask-blue-effects--pulsing {
  animation: manus-pulse 1.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .manus-action-mask-blue-effects,
  .manus-action-mask-action-bar,
  .manus-action-mask-interaction {
    transition: none;
  }
  .manus-action-mask-blue-effects--pulsing {
    animation: none;
    opacity: 0.8;
  }
}

`,at="manus-action-mask-host",W="manus-action-mask-visible",Te="manus-action-mask-modal-visible",st=`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.13351 2.85277C2.96089 3.20722 3.10623 3.63551 3.45812 3.80938C3.96356 4.05912 4.40218 4.30537 4.83646 4.79855C5.09654 5.09391 5.54509 5.12098 5.83832 4.859C6.13155 4.59703 6.15843 4.14522 5.89834 3.84986C5.2795 3.14708 4.6425 2.80213 4.08323 2.5258C3.73133 2.35193 3.30613 2.49832 3.13351 2.85277Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.9693 0.771391C6.58905 0.867144 6.35786 1.25526 6.45292 1.63827C6.51934 1.90586 6.58128 2.13467 6.63798 2.34412C6.7465 2.74501 6.83584 3.07502 6.90063 3.47038C6.96447 3.8599 7.32972 4.12355 7.71644 4.05925C8.10316 3.99494 8.36491 3.62704 8.30107 3.23751C8.22449 2.77023 8.10523 2.3281 7.98554 1.88434C7.93254 1.68783 7.87945 1.491 7.82994 1.29152C7.73487 0.908507 7.34956 0.675637 6.9693 0.771391Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0262 1.21118C10.6911 1.00638 10.2546 1.11397 10.0513 1.4515C9.67415 2.07761 9.47589 2.69411 9.29174 3.43607C9.19668 3.81908 9.42787 4.2072 9.80812 4.30295C10.1884 4.3987 10.5737 4.16583 10.6688 3.78282C10.8394 3.09508 10.996 2.63931 11.2648 2.19315C11.4681 1.85562 11.3613 1.41598 11.0262 1.21118Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6444 18.8703C16.0206 17.9908 16.9721 13.274 16.7628 11.8695C16.7628 11.8695 16.5447 11.1154 16.0124 11.1154C15.6046 11.1153 15.3792 11.4469 15.2961 11.602C15.2243 11.5754 15.1511 11.5513 15.0931 11.5326C15.0618 11.5225 15.0179 11.5085 14.9768 11.4955L14.8988 11.4706C14.8351 11.4502 14.7752 11.4305 14.7187 11.411L14.7189 11.391C14.7213 10.9351 14.675 10.2237 14.2028 9.48246C14.1272 9.36383 14.0559 9.25778 13.9949 9.16783L13.9567 9.11148C13.9113 9.04467 13.8757 8.99224 13.8415 8.93993C13.7574 8.81157 13.7345 8.76211 13.7256 8.73931L13.7252 8.73829C13.7217 8.72945 13.7146 8.71144 13.7127 8.65656C13.7103 8.58913 13.716 8.4615 13.7598 8.23826L13.9871 7.32996L13.9879 7.32529C14.0029 7.24192 14.0164 7.16697 14.0237 7.04495C14.0305 6.93261 14.0319 6.76936 14.0033 6.58002C13.9493 6.22136 13.7419 5.54151 13.0111 5.1474C12.8325 5.0511 12.6185 4.99344 12.4076 4.96587C12.2659 4.94732 12.0763 4.93464 11.8562 4.95164C11.4072 4.98632 10.818 5.148 10.2934 5.62891L10.1628 5.76632C9.85791 6.13457 9.53587 6.59054 9.29156 6.99406C8.54984 6.64492 7.67672 6.24408 7.0667 6.02857C6.39716 5.79204 5.64991 5.59412 4.94768 5.61959C4.16998 5.64779 3.29558 5.97383 2.83781 6.89663C2.64976 7.27572 2.56952 7.71844 2.66609 8.17986C2.75837 8.62079 2.9866 8.95803 3.20458 9.19332C3.60929 9.63021 4.1514 9.90085 4.53346 10.0649C4.82599 10.1905 5.12656 10.295 5.39267 10.3796C5.36457 10.4305 5.33641 10.4831 5.30925 10.5365C5.2288 10.6948 5.13253 10.9065 5.06916 11.1486C5.00596 11.3901 4.95613 11.7342 5.04622 12.1224C5.13869 12.5208 5.32165 12.832 5.53964 13.07C5.53136 13.1937 5.52828 13.3241 5.53287 13.4591C5.56352 14.3604 6.11389 14.9612 6.59798 15.302C7.0592 15.6266 7.60238 15.8259 8.04154 15.9598C8.46559 16.0892 8.9134 16.1918 9.27725 16.2752L9.35511 16.2931C9.74287 16.3822 10.1261 16.4852 10.5095 16.5883C10.9443 16.7053 11.3794 16.8222 11.8214 16.9189C11.9659 16.9505 12.1064 16.9808 12.2356 17.0084L12.2827 17.1311C12.8561 18.5963 13.6217 19.5238 14.6444 18.8703ZM9.40519 12.8732C9.32671 12.8413 9.28166 12.8201 9.2417 12.8C8.89441 12.6193 8.46718 12.7555 8.28652 13.105C8.10551 13.4552 8.24099 13.887 8.58864 14.0694C8.61712 14.0843 8.64605 14.0983 8.6751 14.112C8.7238 14.1349 8.79164 14.1655 8.87425 14.1991C9.03715 14.2653 9.26872 14.3476 9.53127 14.4037C9.99722 14.5033 10.8585 14.5792 11.4425 13.9051C11.7228 13.5814 11.8576 13.1562 11.9088 12.7586C11.9615 12.349 11.9352 11.8996 11.8323 11.4622C11.6295 10.6006 11.0928 9.65785 10.0907 9.21071C9.23198 8.82759 8.38339 8.73752 7.66778 8.81833C7.19 8.87228 6.73352 9.00771 6.36686 9.21411V9.19823C5.47017 8.94031 3.6857 8.42702 4.12514 7.54116C4.45827 6.86962 5.37096 6.92513 6.60889 7.36246C7.1117 7.54009 7.8104 7.85662 8.46947 8.16529C8.67377 8.26097 8.87426 8.3559 9.06392 8.4457C9.34036 8.57658 9.80252 8.79216 9.80252 8.79216C10.3282 8.15676 10.5323 7.80674 10.7124 7.49779C10.8363 7.2853 10.9489 7.09225 11.1469 6.83914C11.4273 6.48088 11.8804 6.25949 12.3452 6.38911C12.6692 6.56381 12.5869 7.00507 12.5869 7.00507L12.3617 7.90478C12.1468 8.96359 12.3847 9.31397 12.7768 9.89144C12.8457 9.99287 12.9194 10.1014 12.9961 10.2219C13.3089 10.7128 13.2944 11.1848 13.2826 11.5701C13.275 11.8179 13.2686 12.0298 13.3509 12.1877C13.5206 12.513 14.1555 12.7147 14.5718 12.8469C14.6718 12.8787 14.7592 12.9065 14.8245 12.931L14.8691 12.9486C14.8105 13.1319 14.7572 13.3216 14.7039 13.5111C14.4671 14.354 14.2314 15.1931 13.5285 15.4445C12.6414 15.7619 11.7542 15.4616 11.7542 15.4616C11.5943 15.4146 11.4315 15.3781 11.2687 15.3417C11.0657 15.2962 10.8627 15.2508 10.6651 15.1847C10.3897 15.0818 10.004 14.9933 9.58477 14.8971C8.58661 14.6681 7.39861 14.3955 7.0584 13.7803C7.00109 13.6766 6.96784 13.5633 6.96361 13.4388C6.94437 12.873 7.14116 12.3664 7.14116 12.3664C7.14116 12.3664 6.83596 12.3677 6.62193 12.1603C6.54215 12.083 6.47503 11.9767 6.44111 11.8305C6.37334 11.5385 6.43153 11.1153 6.78638 10.7579L6.96418 10.5792C7.05402 10.4887 7.32033 10.2962 7.82592 10.2391C8.30587 10.1849 8.89999 10.2431 9.5158 10.5179C9.98815 10.7287 10.3147 11.2121 10.4511 11.7919C10.5178 12.0752 10.53 12.3503 10.5011 12.5748C10.4707 12.8112 10.4037 12.9297 10.3729 12.9652C10.3347 13.0092 10.2002 13.0852 9.82583 13.0052C9.66822 12.9715 9.51852 12.9192 9.40519 12.8732Z" fill="currentColor"/>
</svg>
`;class ot{constructor(t={}){this.maskHost=null,this.blueEffectContainer=null,this.actionBar=null,this.maskLayer=null,this.resumeModal=null,this.currentState="idle",this.globalEventListeners=new Map,this.cdpAllowed=!1,this.defaultStatusText=t.defaultStatusText??"Manus is browsing...",this.onStop=t.onStop,this.onResume=t.onResume,this.onTakeover=t.onTakeover}changeActionMaskState(t){this.currentState=t,this.update()}allowCDP(){this.cdpAllowed=!0}disableCDP(){this.cdpAllowed=!1}update(){switch(this.currentState){case"idle":this.cleanup();break;case"hidden":this.showHiddenState();break;case"ongoing":this.showOngoingState();break;case"takeover":this.showTakeoverState();break}}showHiddenState(){var t,e,n,i;const{host:a}=this.ensureMaskHost();a.isConnected||document.documentElement.append(a),a.style.zIndex="1000000",(t=this.blueEffectContainer)==null||t.classList.remove(W),(e=this.blueEffectContainer)==null||e.classList.remove("manus-action-mask-blue-effects--pulsing"),(n=this.maskLayer)==null||n.classList.add(W),(i=this.actionBar)==null||i.classList.remove(W),this.hideResumeModal(),this.enableGlobalEventBlocking()}showOngoingState(){var t,e,n,i;const{host:a}=this.ensureMaskHost();a.isConnected||document.documentElement.append(a),a.style.zIndex="2147483646",(t=this.blueEffectContainer)==null||t.classList.add(W),(e=this.blueEffectContainer)==null||e.classList.add("manus-action-mask-blue-effects--pulsing"),(n=this.maskLayer)==null||n.classList.add(W),this.updateActionBar("ongoing"),(i=this.actionBar)==null||i.classList.add(W),this.hideResumeModal(),this.enableGlobalEventBlocking()}showTakeoverState(){var t,e,n,i;const{host:a}=this.ensureMaskHost();a.isConnected||document.documentElement.append(a),a.style.zIndex="2147483646",(t=this.blueEffectContainer)==null||t.classList.remove(W),(e=this.blueEffectContainer)==null||e.classList.remove("manus-action-mask-blue-effects--pulsing"),(n=this.maskLayer)==null||n.classList.remove(W),this.updateActionBar("takeover"),(i=this.actionBar)==null||i.classList.add(W),this.hideResumeModal(),this.disableGlobalEventBlocking()}cleanup(){var t;(t=this.maskHost)!=null&&t.isConnected&&this.maskHost.remove(),this.disableGlobalEventBlocking()}ensureMaskHost(){if(this.maskHost)return{host:this.maskHost};const t=document.createElement("div");t.id=at,t.style.position="fixed",t.style.inset="0",t.style.pointerEvents="none",t.style.zIndex="2147483646";const e=t.attachShadow({mode:"open"}),n=this.createStyles();return this.maskLayer=this.createMaskLayer(),this.blueEffectContainer=this.createBlueEffectBackground(),this.actionBar=this.createActionBar(),this.resumeModal=this.createResumeModal(),e.append(n,this.maskLayer,this.blueEffectContainer,this.actionBar,this.resumeModal),this.maskHost=t,{host:t}}createStyles(){const t=document.createElement("style");return t.textContent=rt,t}createMaskLayer(){const t=document.createElement("div");t.className="manus-action-mask-interaction";const e=i=>{i.isTrusted&&(i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation())},n=["mousedown","mouseup","mousemove","click","dblclick","contextmenu","pointerdown","pointermove","pointerup","drag","dragstart","dragend","dragenter","dragleave","dragover","drop"];for(const i of n)t.addEventListener(i,e,{capture:!0,passive:!1});return t}createBlueEffectBackground(){const t=document.createElement("div");t.className="manus-action-mask-blue-effects";const e=document.createElement("div");e.className="manus-action-mask-blue-effects__edge manus-action-mask-blue-effects__edge--top";const n=document.createElement("div");n.className="manus-action-mask-blue-effects__edge manus-action-mask-blue-effects__edge--bottom";const i=document.createElement("div");i.className="manus-action-mask-blue-effects__edge manus-action-mask-blue-effects__edge--left";const a=document.createElement("div");return a.className="manus-action-mask-blue-effects__edge manus-action-mask-blue-effects__edge--right",t.append(e,n,i,a),t}createActionBar(){const t=document.createElement("div");t.className="manus-action-mask-action-bar";const e=document.createElement("div");e.className="manus-action-mask-action-bar__left";const n=document.createElement("div");n.className="manus-action-mask-action-bar__icon",n.innerHTML=st;const i=document.createElement("div");i.className="manus-action-mask-action-bar__status",i.setAttribute("data-status","true"),i.textContent=this.defaultStatusText,e.append(n,i);const a=document.createElement("div");a.className="manus-action-mask-action-bar__right",a.setAttribute("data-action-buttons","true");const l=document.createElement("button");return l.className="manus-action-mask-action-bar__button",l.setAttribute("data-action-btn","true"),l.textContent="Take over",l.type="button",a.append(l),t.append(e,a),t}updateActionBar(t){var e,n;if(!this.actionBar)return;const i=this.actionBar.querySelector("[data-status]"),a=this.actionBar.querySelector("[data-action-btn]"),l=this.actionBar.querySelector("[data-action-buttons]");if(!(!i||!a||!l)){if(t==="ongoing"){i.textContent=this.defaultStatusText,a.textContent="Take over";const s=this.actionBar.querySelector("[data-stop-btn]");s==null||s.remove(),a.className="manus-action-mask-action-bar__button manus-action-mask-action-bar__button--black";const o=a.cloneNode(!0);(e=a.parentNode)==null||e.replaceChild(o,a),o.addEventListener("click",c=>{var f;c.stopPropagation(),(f=this.onTakeover)==null||f.call(this)})}else if(t==="takeover"){i.textContent="User taking over control",a.textContent="Resume",a.className="manus-action-mask-action-bar__button manus-action-mask-action-bar__button--black";const s=a.cloneNode(!0);(n=a.parentNode)==null||n.replaceChild(s,a),s.addEventListener("click",c=>{c.stopPropagation(),this.showResumeModal()});let o=this.actionBar.querySelector("[data-stop-btn]");o||(o=document.createElement("button"),o.className="manus-action-mask-action-bar__button--stop",o.setAttribute("data-stop-btn","true"),o.setAttribute("aria-label","Stop"),o.textContent="Stop",o.type="button",o.addEventListener("click",c=>{var f;c.stopPropagation(),(f=this.onStop)==null||f.call(this)}),l.insertBefore(o,s))}}}createResumeModal(){const t=document.createElement("div");t.className="manus-action-mask-resume-modal";const e=document.createElement("div");e.className="manus-action-mask-resume-modal__content";const n=document.createElement("h2");n.className="manus-action-mask-resume-modal__title",n.textContent="Let Manus know what you've changed";const i=document.createElement("p");i.className="manus-action-mask-resume-modal__description",i.textContent="Summarize your browser actions to help Manus work smoothly.";const a=document.createElement("textarea");a.className="manus-action-mask-resume-modal__textarea",a.placeholder="This message will be sent to Manus...",a.setAttribute("data-textarea","true");const l=document.createElement("div");l.className="manus-action-mask-resume-modal__footer";const s=document.createElement("button");return s.className="manus-action-mask-resume-modal__submit",s.textContent="Send and continue",s.type="button",s.onclick=o=>{var c,f;o.stopPropagation();const u=(c=this.resumeModal)==null?void 0:c.querySelector("[data-textarea]"),m=(u==null?void 0:u.value.trim())||void 0;(f=this.onResume)==null||f.call(this,m),this.hideResumeModal()},l.appendChild(s),e.append(n,i,a,l),t.appendChild(e),t.addEventListener("click",o=>{o.target===t&&this.hideResumeModal()}),t}showResumeModal(){if(!this.resumeModal)return;const t=this.resumeModal.querySelector("[data-textarea]");t&&(t.value=""),this.resumeModal.classList.add(Te)}hideResumeModal(){this.resumeModal&&this.resumeModal.classList.remove(Te)}enableGlobalEventBlocking(){this.disableGlobalEventBlocking();const t=n=>{n.isTrusted&&(this.currentState!=="ongoing"||this.cdpAllowed||(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation()))},e=["keydown","keyup","keypress","wheel"];for(const n of e)this.globalEventListeners.set(n,t),document.addEventListener(n,t,{capture:!0,passive:!1})}disableGlobalEventBlocking(){for(const[t,e]of this.globalEventListeners.entries())document.removeEventListener(t,e,{capture:!0});this.globalEventListeners.clear()}}function lt(r,t){const e=new Intl.Segmenter("en",{granularity:"sentence"}),n=[];for(const E of e.segment(r)){const d=E.segment.replace(/\s+/g," ").replace(/\n+/g," ").trim();d.length>0&&n.push(d)}const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),l=/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff]/.test(t)?new RegExp(i,"ui"):new RegExp(`(?<!\\p{L})${i}(?!\\p{L})`,"ui"),s=[];n.forEach((E,d)=>{l.test(E)&&s.push(d)});const o=20,c=[],f=[...s].sort((E,d)=>E-d);if(f.length===0)return c;const u=E=>E.trim().split(/\s+/).length,m=E=>{const d=E.trim();return d.length<10?!0:[/^\s*$/,/^[0-9]+\.\s*$/,/^[a-z]\)\s*$/,/^[•·▪▫]\s*$/].some(_=>_.test(d))},g=E=>{const d=E.trim();return[/^[A-Z][^.!?]*$/,/^[A-Z][A-Z\s]+$/,/^[A-Z][a-z\s]+[A-Z][a-z\s]*$/,/^[A-Z][a-z\s]+:$/].some(_=>_.test(d))},k=E=>{const d=E.trim();return d.length>=10&&!m(d)},w=E=>{const d=E.trim();return k(d)||g(d)},T=(E,d)=>{for(const v of d){if(v===E)continue;const _=Math.max(0,v-2),N=Math.min(n.length-1,v+2);if(E>=_&&E<=N)return!0}return!1},S=(E,d)=>{let v=E,_=E,N=u(n[E]||"");for(;N<o&&(v>0||_<n.length-1);){const H=v>0,F=_<n.length-1;if(H&&F){const O=n[v-1]||"",h=n[_+1]||"",p=m(O),b=m(h);if(p&&b){if(v>1){const C=n[v-2]||"";w(C)&&!T(v-2,d)&&(v-=2,N+=u(C))}if(_<n.length-2){const C=n[_+2]||"";w(C)&&!T(_+2,d)&&(_+=2,N+=u(C))}break}if(p){if(!b)_++,N+=u(h);else if(_<n.length-2){const C=n[_+2]||"";w(C)&&!T(_+2,d)&&(_+=2,N+=u(C))}break}else if(b){if(v--,N+=u(O),v>1){const C=n[v-2]||"";w(C)&&!T(v-2,d)&&(v-=2,N+=u(C))}break}const $=u(O),M=u(h);$<=M?(v--,N+=$):(_++,N+=M)}else if(H){const O=n[v-1]||"";if(m(O)){if(v>1){const h=n[v-2]||"";w(h)&&!T(v-2,d)&&(v-=2,N+=u(h))}break}v--,N+=u(O)}else if(F){const O=n[_+1]||"";if(m(O)){if(_<n.length-2){const h=n[_+2]||"";w(h)&&!T(_+2,d)&&(_+=2,N+=u(h))}break}_++,N+=u(O)}}return{start:v,end:_}},A=f[0];if(A===void 0)return c;const R=S(A,f);let x=R.start,P=R.end;for(let E=1;E<f.length;E++){const d=f[E];if(d===void 0)continue;const v=S(d,f),_=v.start,N=v.end;if(_<=P+1)P=N;else{const H=n.slice(x,P+1).join(". ").replace(/\.\s*\./g,".");c.push(H),x=_,P=N}}const y=n.slice(x,P+1).join(". ").replace(/\.\s*\./g,".");return c.push(y),c}const Z={clickableTagNames:new Set(["a","button","details","embed","input","label","menu","menuitem","object","select","textarea","summary"]),clickableRoleValues:new Set(["button","tab","link","checkbox","menuitem","menuitemcheckbox","menuitemradio","radio"]),highlightColors:["#FF0000","#48BC00","#0000FF","#FFA500","#800080","#008080","#FF69B4","#4B0082","#FF4500","#2E8B57","#DC143C","#4682B4"],elementBlacklist:new Set(["svg","script","style","link","meta"])},ue="playwright-highlight-container";class ct{removeHighlights(){try{const t=document.getElementById(ue);t&&t.remove(),document.querySelectorAll('[browser-user-highlight-id^="playwright-highlight-"]').forEach(n=>{n.removeAttribute("browser-user-highlight-id")})}catch(t){console.error("Failed to remove highlights:",t)}}highlightElement(t,e,n=null){if(!document.body)return console.error("document.body not ready, cannot create highlight container"),e;let i=document.getElementById(ue);i||(i=document.createElement("div"),i.id=ue,i.style.position="absolute",i.style.pointerEvents="none",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.zIndex="2147483647",document.body.appendChild(i));const a=Z.highlightColors,l=e%a.length,s=a[l],o=`${s}1A`,c=document.createElement("div");c.style.position="absolute",c.style.border=`2px solid ${s}`,c.style.backgroundColor=o,c.style.pointerEvents="none",c.style.boxSizing="border-box";const f=t.getBoundingClientRect();let u=f.top+window.scrollY,m=f.left+window.scrollX;if(n){const A=n.getBoundingClientRect();u+=A.top,m+=A.left}c.style.top=`${u}px`,c.style.left=`${m}px`,c.style.width=`${f.width}px`,c.style.height=`${f.height}px`;const g=document.createElement("div");g.className="playwright-highlight-label",g.style.position="absolute",g.style.background=s,g.style.color="white",g.style.padding="1px 4px",g.style.borderRadius="4px",g.style.fontSize=`${Math.min(12,Math.max(8,f.height/2))}px`,g.textContent=e.toString();const k=20,w=16;let T=u+2,S=m+f.width-k-2;return(f.width<k+4||f.height<w+4)&&(T=u-w-2,S=m+f.width-k),g.style.top=`${T}px`,g.style.left=`${S}px`,i.appendChild(c),i.appendChild(g),t.setAttribute("browser-user-highlight-id",`playwright-highlight-${e}`),e+1}}function ut(r){return r instanceof HTMLElement}function ft(r=5e3){return document.body?Promise.resolve(!0):new Promise(t=>{const e=new MutationObserver(()=>{document.body&&(e.disconnect(),t(!0))});e.observe(document.documentElement,{childList:!0,subtree:!0}),setTimeout(()=>{e.disconnect(),t(!1)},r)})}function Fe(r,t,e=!1,n=!1){const i=new TextEncoder,a=i.encode(r);if(a.length<=t)return r;const l=a.length-t,s=n?`...${l} bytes truncated...`:"...";if(e){let o=0,c=r.length;for(;c>0&&o<t;)c--,o+=i.encode(r[c]).length;return o>t&&c++,s+r.slice(c)}else{let o=0,c=0;for(;c<r.length&&o<t;)o+=i.encode(r[c]).length,c++;return o>t&&c--,r.slice(0,c)+s}}const ht="data-manus_clickable",Y="data-manus_click_id",dt=.5,te=1,xe=5,ne=8,mt=ne*ne;class gt{constructor(){B(this,"highlightHelper",new ct);B(this,"clickableElements",{})}async refreshClickableElements(t={}){const e={},n=t.useCdpMarkers;document.querySelectorAll(`[${Y}]`).forEach(g=>{g.removeAttribute(Y)});let i;n?i=this.findCdpMarkedElements():i=this.findClickableElements(),i=this.filterOverlappingElements(i);const a=new Map;i.forEach(({element:g,rect:k})=>{a.set(g,k)});const l=[],s=new Set,o=g=>{!g||!(g instanceof HTMLElement)||(a.has(g)&&(l.push(g),s.add(g)),Array.from(g.children).forEach(k=>{o(k)}))},c=document.body??document.documentElement;c&&o(c),i.forEach(({element:g})=>{s.has(g)||l.push(g)});const f=this.getViewportSnapshot(),u=g=>{const k=g.right>0&&g.left<f.width,w=g.bottom>0&&g.top<f.height;return k&&w};let m=1;return l.forEach(g=>{const k=a.get(g);if(!k||k.width<=0||k.height<=0||!u(k))return;const w=m;m+=1,g.setAttribute(Y,String(w));const{text:T,description:S}=pt(g);e[w]={element:g,index:w,text:T,description:S}}),this.clickableElements=e,e}async getVisibleClickableRects(t={}){await this.refreshClickableElements(t);const e=this.getViewportSnapshot(),n=[];for(const{element:i,index:a}of Object.values(this.clickableElements)){if(!i.isConnected)continue;const l=i.getBoundingClientRect();if(!this.hasRenderableSize(l))continue;const s=this.clipRectToViewport(l,e);if(!s||!this.isElementVisuallyVisible(i)||this.computeVisibilityRatio(i,s)<dt)continue;const c={i:a,b:[s.left,s.top,s.width,s.height],t:i.tagName.toLowerCase()};if(i instanceof HTMLInputElement){const f=(i.getAttribute("type")||"text").toLowerCase();f&&(c.it=f)}n.push(c)}return{e:n,v:{w:e.width,h:e.height,d:e.devicePixelRatio}}}findClickableElements(){const t=[],e=Array.from(document.querySelectorAll("*"));for(const n of e){if(!ut(n)||Z.elementBlacklist.has(n.tagName.toLowerCase()))continue;const i=n.tagName.toLowerCase()==="img",{isClickable:a}=yt(n);if(!a)if(i){if(n.offsetWidth<28||n.offsetHeight<28)continue}else continue;if(!Ae(n))continue;const l=n.getBoundingClientRect();t.push({element:n,rect:l})}return t}findCdpMarkedElements(){const t=[],e=document.querySelectorAll(`[${ht}]`);for(const n of e){if(!Ae(n))continue;const i=n.getBoundingClientRect();t.push({element:n,rect:i})}return t}filterOverlappingElements(t){if(t.length<=1)return t;const e=new Set(t),n=.8;for(let i=0;i<t.length;i++)for(let a=i+1;a<t.length;a++){const l=t[i],s=t[a];if(!e.has(l)||!e.has(s)||vt(l.rect,s.rect)<n)continue;const c=(Math.max(l.rect.left,s.rect.left)+Math.min(l.rect.right,s.rect.right))/2,f=(Math.max(l.rect.top,s.rect.top)+Math.min(l.rect.bottom,s.rect.bottom))/2,u=document.elementFromPoint(c,f);if(!u)continue;const m=l.element===u||l.element.contains(u),g=s.element===u||s.element.contains(u);m&&!g?e.delete(s):g&&!m&&e.delete(l)}return t.filter(i=>e.has(i))}getCidSelector(t){return t?`[${Y}="${t}"]`:`[${Y}]`}getElementByCid(t){return document.querySelector(this.getCidSelector(t))}findElementFromPoint(t,e){return ie(t,e)}getViewportSnapshot(){const t=window.visualViewport;return{width:(t==null?void 0:t.width)??window.innerWidth,height:(t==null?void 0:t.height)??window.innerHeight,devicePixelRatio:window.devicePixelRatio||1}}hasRenderableSize(t){return t.width>te&&t.height>te}clipRectToViewport(t,e){const n=Math.max(t.left,0),i=Math.max(t.top,0),a=Math.min(t.right,e.width),l=Math.min(t.bottom,e.height),s=a-n,o=l-i;return s<=te||o<=te?null:{left:n,top:i,width:s,height:o}}isElementVisuallyVisible(t){const e=window.getComputedStyle(t);if(e.display==="none"||e.visibility==="hidden"||e.visibility==="collapse")return!1;const n=Number.parseFloat(e.opacity||"1");return!Number.isNaN(n)&&n<=0||e.pointerEvents==="none"?!1:!t.closest('[hidden], template, [aria-hidden="true"]')}computeVisibilityRatio(t,e){const n=this.buildSamplePoints(e);if(!n.length)return 1;let i=0;for(const a of n)this.isElementOnTopAtPoint(t,a.x,a.y)&&(i+=1);return i/n.length}buildSamplePoints(t){const e=Math.min(ne,Math.max(1,Math.round(t.width/xe))),n=Math.min(ne,Math.max(1,Math.round(t.height/xe))),i=t.width/e,a=t.height/n,l=[];for(let s=0;s<n;s+=1)for(let o=0;o<e;o+=1){const c=t.left+i*(o+.5),f=t.top+a*(s+.5);if(l.push({x:c,y:f}),l.length>=mt)return l}return l}isElementOnTopAtPoint(t,e,n){const i=this.getTopElementAtPoint(e,n);return i?i===t?!0:this.isDescendantOf(i,t):!1}getTopElementAtPoint(t,e){const n=document.elementFromPoint(t,e);return n?n.shadowRoot&&n.shadowRoot.elementFromPoint(t,e)||n:null}isDescendantOf(t,e){if(t===e)return!0;const n=new Set;let i=t;for(;i&&!n.has(i);){if(i===e)return!0;if(n.add(i),i.parentElement){i=i.parentElement;continue}const a=i.getRootNode();a instanceof ShadowRoot?i=a.host:i=null}return!1}}const K=new gt;function ie(r,t,e,n){const i=e??document,a=n??[],s=(i.elementsFromPoint?i.elementsFromPoint(r,t):[i.elementFromPoint(r,t)].filter(Boolean)).find(o=>{if(!o||a.includes(o))return!1;const c=o.id||"",f=typeof o.className=="string"?o.className:"";return!c.includes("manus-action")&&!f.includes("manus-action")&&!c.includes("monica-action")&&!f.includes("monica-action")})||null;return s?(a.push(s),s.shadowRoot?ie(r,t,s.shadowRoot,a):s):null}function pt(r){const t=r.tagName.toLowerCase(),e=50;function n(f){return Fe($e(f),e)}let i=r instanceof HTMLSelectElement?bt(r,200):n(r.innerText||r.textContent||"");const a=[];r.id&&a.push(`domId:"${n(r.id)}"`);const l=r.title||r.ariaLabel||r.role;l&&a.push(`hint:"${n(l)}"`);const s=r instanceof HTMLInputElement;if(s&&r.type&&a.push(`type:"${r.type}"`),s&&r.placeholder&&a.push(`placeholder:"${n(r.placeholder)}"`),s){const f=r.type==="submit"?"submit":"";i=n(r.value||f)}else if(!i&&r instanceof HTMLTextAreaElement){const f=r.value||r.placeholder;f&&(i=n(f))}const o=a.length?`{${a.join(",")}}`:"{}",c=`${t} ${o}${i?` ${i}`:""}`.trim();return{text:i,description:c}}function $e(r){return r.replace(/\s+/g," ").trim()}function bt(r,t){return Array.from(r.querySelectorAll("option")).slice(0,20).map((n,i)=>{const a=$e(n.innerText||n.textContent||"");return`option#${i}:"${Fe(a,t)}"`}).join(", ")}function yt(r){if(r.tagName.toLowerCase()==="body")return{isClickable:!1,reason:"isBody"};const t=r.tagName.toLowerCase();if(Z.clickableTagNames.has(t))return{isClickable:!0,reason:"tagName"};const e=r.getAttribute("role");if(e&&Z.clickableRoleValues.has(e))return{isClickable:!0,reason:"role"};const n=r.getAttribute("aria-role");if(n&&Z.clickableRoleValues.has(n))return{isClickable:!0,reason:"ariaRole"};if(r.getAttribute("contenteditable")==="true")return{isClickable:!0,reason:"isEditable"};if(r.classList.contains("address-input__container__input")||r.getAttribute("data-action")==="a-dropdown-select"||r.getAttribute("data-action")==="a-dropdown-button")return{isClickable:!0,reason:"interactiveRole"};if(r.onclick!==null||r.getAttribute("onclick")!==null||r.hasAttribute("ng-click")||r.hasAttribute("@click")||r.hasAttribute("v-on:click"))return{isClickable:!0,reason:"clickHandler"};if(r.hasAttribute("aria-expanded")||r.hasAttribute("aria-pressed")||r.hasAttribute("aria-selected")||r.hasAttribute("aria-checked"))return{isClickable:!0,reason:"ariaProps"};const s=r.tagName==="IMG";return(r.draggable||r.getAttribute("draggable")==="true")&&!s?{isClickable:!0,reason:"draggable"}:{isClickable:!1}}function Ae(r){if(r.ownerDocument!==window.document)return!0;const e=r.getBoundingClientRect(),n=ie(e.left+e.width*.5,e.top+e.height*.5);if(n&&(r.contains(n)||n.contains(r)))return!0;const i=[e.top+.1,e.bottom-.1],a=[e.left+.1,e.right-.1];for(const l of i)for(const s of a){const o=ie(s,l);if(o&&(r.contains(o)||o.contains(r)))return!0}return!1}function vt(r,t){const e=Math.max(r.left,t.left),n=Math.min(r.right,t.right),i=Math.max(r.top,t.top),a=Math.min(r.bottom,t.bottom);if(e>=n||i>=a)return 0;const l=(n-e)*(a-i),s=r.width*r.height,o=t.width*t.height,c=Math.min(s,o);return c>0?l/c:0}const _t=new Set(["ctrl","control","shift","alt","meta","cmd","command"]),Et={...Object.fromEntries(Array.from({length:26},(r,t)=>{const e=String.fromCharCode(97+t);return[e,`Key${e.toUpperCase()}`]})),...Object.fromEntries(Array.from({length:10},(r,t)=>[String(t),`Digit${t}`])),...Object.fromEntries(Array.from({length:12},(r,t)=>[`f${t+1}`,`F${t+1}`])),enter:"Enter",return:"Enter",tab:"Tab",escape:"Escape",esc:"Escape",space:"Space"," ":"Space",backspace:"Backspace",delete:"Delete",del:"Delete",insert:"Insert",ins:"Insert",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown",shift:"ShiftLeft",ctrl:"ControlLeft",control:"ControlLeft",alt:"AltLeft",meta:"MetaLeft",cmd:"MetaLeft",command:"MetaLeft",",":"Comma",".":"Period","/":"Slash","\\":"Backslash","[":"BracketLeft","]":"BracketRight",";":"Semicolon","'":"Quote","`":"Backquote","-":"Minus","=":"Equal",numpad0:"Numpad0",numpad1:"Numpad1",numpad2:"Numpad2",numpad3:"Numpad3",numpad4:"Numpad4",numpad5:"Numpad5",numpad6:"Numpad6",numpad7:"Numpad7",numpad8:"Numpad8",numpad9:"Numpad9",numpadadd:"NumpadAdd",numpadsubtract:"NumpadSubtract",numpadmultiply:"NumpadMultiply",numpaddivide:"NumpadDivide",numpaddecimal:"NumpadDecimal",numpadenter:"NumpadEnter"},wt={...Object.fromEntries(Array.from({length:26},(r,t)=>[String.fromCharCode(97+t),65+t])),...Object.fromEntries(Array.from({length:10},(r,t)=>[String(t),48+t])),...Object.fromEntries(Array.from({length:12},(r,t)=>[`f${t+1}`,112+t])),enter:13,return:13,tab:9,escape:27,esc:27,space:32," ":32,backspace:8,delete:46,del:46,insert:45,ins:45,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,up:38,down:40,left:37,right:39,home:36,end:35,pageup:33,pagedown:34,shift:16,ctrl:17,control:17,alt:18,meta:91,cmd:91,command:91,",":188,".":190,"/":191,"\\":220,"[":219,"]":221,";":186,"'":222,"`":192,"-":189,"=":187};function kt(r){const t=r.toLowerCase();return Et[t]??r}function Nt(r){const t=r.toLowerCase();return wt[t]??0}function Tt(r){const t=r.split("+").map(n=>n.trim()),e={key:"",code:"",keyCode:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1};for(const n of t){const i=n.toLowerCase();_t.has(i)?i==="ctrl"||i==="control"?e.ctrlKey=!0:i==="shift"?e.shiftKey=!0:i==="alt"?e.altKey=!0:(i==="meta"||i==="cmd"||i==="command")&&(e.metaKey=!0):(e.key=n.length===1?n:xt(i),e.code=kt(n),e.keyCode=Nt(n))}return e}function xt(r){return r.charAt(0).toUpperCase()+r.slice(1)}function At(r,t){const e={key:t.key,code:t.code,keyCode:t.keyCode,which:t.keyCode,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,bubbles:!0,cancelable:!0,view:window},n=new KeyboardEvent("keydown",e);if(r.dispatchEvent(n),t.key.length===1&&!t.ctrlKey&&!t.metaKey){const l=new KeyboardEvent("keypress",e);r.dispatchEvent(l)}const a=new KeyboardEvent("keyup",e);r.dispatchEvent(a)}function Ce(r,t){if(!r||!r.trim())return{success:!1,error:"Key string cannot be empty"};const e=Tt(r);if(!e.key)return{success:!1,error:`Failed to parse key string: "${r}"`};const n=t??document.activeElement??document.body;At(n,e);const i=[];return e.ctrlKey&&i.push("Ctrl"),e.shiftKey&&i.push("Shift"),e.altKey&&i.push("Alt"),e.metaKey&&i.push("Meta"),{success:!0,message:`Pressed key: ${i.length>0?`${i.join("+")}+${e.key}`:e.key}`,config:e}}class Ct{async execute(t){switch(t.type){case"browser_click":return this.executeClick(t.target);case"browser_input":return this.executeInput(t.target,t.text,t.pressEnter);case"browser_scroll":return t.direction==="left"||t.direction==="right"?this.executeHorizontalScroll(t.direction,t.toExtreme):this.executeVerticalScroll(t.direction,t.toExtreme);case"browser_find_keyword":return this.executeFindKeyword(t.keyword);case"browser_keyboard":return this.executeKeyboard(t.key);default:return{success:!1,error:"Unsupported action type"}}}async resolveTarget(t){switch(t.strategy){case"bySelector":return document.querySelector(t.selector);case"byIndex":{const e=K.getElementByCid(t.index);if(e)return e;await K.refreshClickableElements();const n=K.clickableElements[t.index];return(n==null?void 0:n.element)??null}case"byCoordinates":return K.findElementFromPoint(t.x,t.y);default:return null}}ensureInteractable(t){return t instanceof HTMLElement}async executeClick(t){const e=await this.resolveTarget(t);return this.ensureInteractable(e)?(e.scrollIntoView({block:"center",inline:"center",behavior:"auto"}),e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),{success:!0,message:"Click action executed",data:this.describeElement(e)}):{success:!1,error:"Target element not found for click action."}}async executeInput(t,e,n=!1){var l;const i=await this.resolveTarget(t);if(!this.ensureInteractable(i))return{success:!1,error:"Target element not found for input action."};const a=i;if("value"in a){const s=(l=Object.getOwnPropertyDescriptor(a instanceof HTMLTextAreaElement?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype,"value"))==null?void 0:l.set;s?s.call(a,e):a.value=e}else a.textContent=e;return a.dispatchEvent(new Event("input",{bubbles:!0})),a.dispatchEvent(new Event("change",{bubbles:!0})),n&&Ce("Enter",a),{success:!0,message:"Input action executed",data:{textLength:e.length}}}async executeVerticalScroll(t,e){const n=Date.now(),i=500,a=10,l=100,s=2e3,o=[],c=h=>{if(h.clientHeight<l||h.scrollHeight<=h.clientHeight)return!1;const p=getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")return!1;const b=p.overflowY;return["auto","scroll","overlay"].includes(b)};let f=0;const u=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,{acceptNode:h=>{const p=h;return p.tagName==="SCRIPT"||p.tagName==="STYLE"||p.tagName==="NOSCRIPT"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let m=u.nextNode();for(;m&&!(Date.now()-n>s||f>=i||o.length>=a);){const h=m;f++,c(h)&&o.push(h),m=u.nextNode()}o.sort((h,p)=>p.clientWidth*p.clientHeight-h.clientWidth*h.clientHeight);const k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)-window.innerHeight-window.scrollY,w=window.scrollY,T=t==="down"?k:w;let S=0;if(o.length>0){const h=o[0],p=h.scrollHeight-h.clientHeight-h.scrollTop,b=h.scrollTop;S=t==="down"?p:b}const A=Math.max(T,S),R=()=>({windowY:window.scrollY,containerTops:o.map(h=>h.scrollTop)}),x=R(),P=["window-scroll","container-scroll"],y=[async()=>{const h={behavior:"auto"},p=window.innerHeight;if(t==="up")h.top=e?0:Math.max(window.scrollY-p,0);else{const b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);h.top=e?b:window.scrollY+p}window.scrollTo(h)},async()=>{const h=o[0];if(!h)return;const p=h.clientHeight,b={behavior:"auto"};t==="up"?b.top=e?0:Math.max(h.scrollTop-p,0):b.top=e?h.scrollHeight:h.scrollTop+p,h.scrollTo(b)}],E=h=>{const b=Math.min(200,A*.8),$=Math.abs(h.windowY-x.windowY);if($>=b)return{success:!0,type:"window",delta:$};for(let M=0;M<x.containerTops.length;M++){const C=Math.abs((h.containerTops[M]??0)-(x.containerTops[M]??0));if(C>=b)return{success:!0,type:"container",delta:C,containerIndex:M}}return{success:!1,type:"none",delta:0}};let d=!1,v=-1;for(let h=0;h<y.length;h++){await y[h]();const p=R();if(E(p).success){d=!0,v=h;break}}const _=R(),N=Math.abs(_.windowY-x.windowY),H=Math.max(0,...x.containerTops.map((h,p)=>Math.abs((_.containerTops[p]??0)-h))),F=Math.max(N,H);return{success:!0,message:d?`Scrolled ${t} by ${Math.round(F)}px with strategy ${P[v]}`:`Scroll ${t} attempted (no position change detected)`}}async executeHorizontalScroll(t,e){const n=Date.now(),i=500,a=10,l=100,s=2e3,o=[],c=h=>{if(h.clientWidth<l||h.scrollWidth<=h.clientWidth)return!1;const p=getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")return!1;const b=p.overflowX;return["auto","scroll","overlay"].includes(b)};let f=0;const u=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,{acceptNode:h=>{const p=h;return p.tagName==="SCRIPT"||p.tagName==="STYLE"||p.tagName==="NOSCRIPT"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let m=u.nextNode();for(;m&&!(Date.now()-n>s||f>=i||o.length>=a);){const h=m;f++,c(h)&&o.push(h),m=u.nextNode()}o.sort((h,p)=>p.clientWidth*p.clientHeight-h.clientWidth*h.clientHeight);const k=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)-window.innerWidth-window.scrollX,w=window.scrollX,T=t==="right"?k:w;let S=0;if(o.length>0){const h=o[0],p=h.scrollWidth-h.clientWidth-h.scrollLeft,b=h.scrollLeft;S=t==="right"?p:b}const A=Math.max(T,S),R=()=>({windowX:window.scrollX,containerLefts:o.map(h=>h.scrollLeft)}),x=R(),P=["window-scroll","container-scroll"],y=[async()=>{const h={behavior:"auto"},p=window.innerWidth;if(t==="left")h.left=e?0:Math.max(window.scrollX-p,0);else{const b=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth);h.left=e?b:window.scrollX+p}window.scrollTo(h)},async()=>{const h=o[0];if(!h)return;const p=h.clientWidth,b={behavior:"auto"};t==="left"?b.left=e?0:Math.max(h.scrollLeft-p,0):b.left=e?h.scrollWidth:h.scrollLeft+p,h.scrollTo(b)}],E=h=>{const b=Math.min(200,A*.8),$=Math.abs(h.windowX-x.windowX);if($>=b)return{success:!0,type:"window",delta:$};for(let M=0;M<x.containerLefts.length;M++){const C=Math.abs((h.containerLefts[M]??0)-(x.containerLefts[M]??0));if(C>=b)return{success:!0,type:"container",delta:C,containerIndex:M}}return{success:!1,type:"none",delta:0}};let d=!1,v=-1;for(let h=0;h<y.length;h++){await y[h]();const p=R();if(E(p).success){d=!0,v=h;break}}const _=R(),N=Math.abs(_.windowX-x.windowX),H=Math.max(0,...x.containerLefts.map((h,p)=>Math.abs((_.containerLefts[p]??0)-h))),F=Math.max(N,H);return{success:!0,message:d?`Scrolled ${t} by ${Math.round(F)}px with strategy ${P[v]}`:`Scroll ${t} attempted (no position change detected)`}}async executeFindKeyword(t){try{const e=t.trim();if(!e)return{success:!1,error:"Keyword cannot be empty"};const n=lt(document.body.innerText,e);if(!n||n.length===0)return{success:!1,error:`No text found containing "${e}" on the current page`};const i=n.length;return{success:!0,message:[`Attempted to find keyword, found ${i} occurrences of "${e}"`,"[Search results]",...n].join(`
`),data:{results:n,totalMatches:i}}}catch(e){return{success:!1,error:e instanceof Error?e.message:String(e)}}}executeKeyboard(t){return Ce(t)}describeElement(t){const e=t.getBoundingClientRect();return{tag:t.tagName,id:t.id,classes:Array.from(t.classList),textContent:t.textContent,rect:{top:e.top,left:e.left,width:e.width,height:e.height}}}}var Ge={exports:{}};(function(r){function t(e,n){if(n&&n.documentElement)e=n,n=arguments[2];else if(!e||!e.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(n=n||{},this._doc=e,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!n.debug,this._maxElemsToParse=n.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=n.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=n.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(n.classesToPreserve||[]),this._keepClasses=!!n.keepClasses,this._serializer=n.serializer||function(i){return i.innerHTML},this._disableJSONLD=!!n.disableJSONLD,this._allowedVideoRegex=n.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let i=function(a){if(a.nodeType==a.TEXT_NODE)return`${a.nodeName} ("${a.textContent}")`;let l=Array.from(a.attributes||[],function(s){return`${s.name}="${s.value}"`}).join(" ");return`<${a.localName} ${l}>`};this.log=function(){if(typeof console<"u"){let l=Array.from(arguments,s=>s&&s.nodeType==this.ELEMENT_NODE?i(s):s);l.unshift("Reader: (Readability)"),console.log.apply(console,l)}else if(typeof dump<"u"){var a=Array.prototype.map.call(arguments,function(l){return l&&l.nodeName?i(l):l}).join(" ");dump("Reader: (Readability) "+a+`
`)}}}else this.log=function(){}}t.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,commas:/\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(e){this._fixRelativeUris(e),this._simplifyNestedElements(e),this._keepClasses||this._cleanClasses(e)},_removeNodes:function(e,n){if(this._docJSDOMParser&&e._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var i=e.length-1;i>=0;i--){var a=e[i],l=a.parentNode;l&&(!n||n.call(this,a,i,e))&&l.removeChild(a)}},_replaceNodeTags:function(e,n){if(this._docJSDOMParser&&e._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(const i of e)this._setNodeTag(i,n)},_forEachNode:function(e,n){Array.prototype.forEach.call(e,n,this)},_findNode:function(e,n){return Array.prototype.find.call(e,n,this)},_someNode:function(e,n){return Array.prototype.some.call(e,n,this)},_everyNode:function(e,n){return Array.prototype.every.call(e,n,this)},_concatNodeLists:function(){var e=Array.prototype.slice,n=e.call(arguments),i=n.map(function(a){return e.call(a)});return Array.prototype.concat.apply([],i)},_getAllNodesWithTag:function(e,n){return e.querySelectorAll?e.querySelectorAll(n.join(",")):[].concat.apply([],n.map(function(i){var a=e.getElementsByTagName(i);return Array.isArray(a)?a:Array.from(a)}))},_cleanClasses:function(e){var n=this._classesToPreserve,i=(e.getAttribute("class")||"").split(/\s+/).filter(function(a){return n.indexOf(a)!=-1}).join(" ");for(i?e.setAttribute("class",i):e.removeAttribute("class"),e=e.firstElementChild;e;e=e.nextElementSibling)this._cleanClasses(e)},_fixRelativeUris:function(e){var n=this._doc.baseURI,i=this._doc.documentURI;function a(o){if(n==i&&o.charAt(0)=="#")return o;try{return new URL(o,n).href}catch{}return o}var l=this._getAllNodesWithTag(e,["a"]);this._forEachNode(l,function(o){var c=o.getAttribute("href");if(c)if(c.indexOf("javascript:")===0)if(o.childNodes.length===1&&o.childNodes[0].nodeType===this.TEXT_NODE){var f=this._doc.createTextNode(o.textContent);o.parentNode.replaceChild(f,o)}else{for(var u=this._doc.createElement("span");o.firstChild;)u.appendChild(o.firstChild);o.parentNode.replaceChild(u,o)}else o.setAttribute("href",a(c))});var s=this._getAllNodesWithTag(e,["img","picture","figure","video","audio","source"]);this._forEachNode(s,function(o){var c=o.getAttribute("src"),f=o.getAttribute("poster"),u=o.getAttribute("srcset");if(c&&o.setAttribute("src",a(c)),f&&o.setAttribute("poster",a(f)),u){var m=u.replace(this.REGEXPS.srcsetUrl,function(g,k,w,T){return a(k)+(w||"")+T});o.setAttribute("srcset",m)}})},_simplifyNestedElements:function(e){for(var n=e;n;){if(n.parentNode&&["DIV","SECTION"].includes(n.tagName)&&!(n.id&&n.id.startsWith("readability"))){if(this._isElementWithoutContent(n)){n=this._removeAndGetNext(n);continue}else if(this._hasSingleTagInsideElement(n,"DIV")||this._hasSingleTagInsideElement(n,"SECTION")){for(var i=n.children[0],a=0;a<n.attributes.length;a++)i.setAttribute(n.attributes[a].name,n.attributes[a].value);n.parentNode.replaceChild(i,n),n=i;continue}}n=this._getNextNode(n)}},_getArticleTitle:function(){var e=this._doc,n="",i="";try{n=i=e.title.trim(),typeof n!="string"&&(n=i=this._getInnerText(e.getElementsByTagName("title")[0]))}catch{}var a=!1;function l(m){return m.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(n))a=/ [\\\/>»] /.test(n),n=i.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),l(n)<3&&(n=i.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(n.indexOf(": ")!==-1){var s=this._concatNodeLists(e.getElementsByTagName("h1"),e.getElementsByTagName("h2")),o=n.trim(),c=this._someNode(s,function(m){return m.textContent.trim()===o});c||(n=i.substring(i.lastIndexOf(":")+1),l(n)<3?n=i.substring(i.indexOf(":")+1):l(i.substr(0,i.indexOf(":")))>5&&(n=i))}else if(n.length>150||n.length<15){var f=e.getElementsByTagName("h1");f.length===1&&(n=this._getInnerText(f[0]))}n=n.trim().replace(this.REGEXPS.normalize," ");var u=l(n);return u<=4&&(!a||u!=l(i.replace(/[\|\-\\\/>»]+/g,""))-1)&&(n=i),n},_prepDocument:function(){var e=this._doc;this._removeNodes(this._getAllNodesWithTag(e,["style"])),e.body&&this._replaceBrs(e.body),this._replaceNodeTags(this._getAllNodesWithTag(e,["font"]),"SPAN")},_nextNode:function(e){for(var n=e;n&&n.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(n.textContent);)n=n.nextSibling;return n},_replaceBrs:function(e){this._forEachNode(this._getAllNodesWithTag(e,["br"]),function(n){for(var i=n.nextSibling,a=!1;(i=this._nextNode(i))&&i.tagName=="BR";){a=!0;var l=i.nextSibling;i.parentNode.removeChild(i),i=l}if(a){var s=this._doc.createElement("p");for(n.parentNode.replaceChild(s,n),i=s.nextSibling;i;){if(i.tagName=="BR"){var o=this._nextNode(i.nextSibling);if(o&&o.tagName=="BR")break}if(!this._isPhrasingContent(i))break;var c=i.nextSibling;s.appendChild(i),i=c}for(;s.lastChild&&this._isWhitespace(s.lastChild);)s.removeChild(s.lastChild);s.parentNode.tagName==="P"&&this._setNodeTag(s.parentNode,"DIV")}})},_setNodeTag:function(e,n){if(this.log("_setNodeTag",e,n),this._docJSDOMParser)return e.localName=n.toLowerCase(),e.tagName=n.toUpperCase(),e;for(var i=e.ownerDocument.createElement(n);e.firstChild;)i.appendChild(e.firstChild);e.parentNode.replaceChild(i,e),e.readability&&(i.readability=e.readability);for(var a=0;a<e.attributes.length;a++)try{i.setAttribute(e.attributes[a].name,e.attributes[a].value)}catch{}return i},_prepArticle:function(e){this._cleanStyles(e),this._markDataTables(e),this._fixLazyImages(e),this._cleanConditionally(e,"form"),this._cleanConditionally(e,"fieldset"),this._clean(e,"object"),this._clean(e,"embed"),this._clean(e,"footer"),this._clean(e,"link"),this._clean(e,"aside");var n=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(e.children,function(i){this._cleanMatchedNodes(i,function(a,l){return this.REGEXPS.shareElements.test(l)&&a.textContent.length<n})}),this._clean(e,"iframe"),this._clean(e,"input"),this._clean(e,"textarea"),this._clean(e,"select"),this._clean(e,"button"),this._cleanHeaders(e),this._cleanConditionally(e,"table"),this._cleanConditionally(e,"ul"),this._cleanConditionally(e,"div"),this._replaceNodeTags(this._getAllNodesWithTag(e,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(e,["p"]),function(i){var a=i.getElementsByTagName("img").length,l=i.getElementsByTagName("embed").length,s=i.getElementsByTagName("object").length,o=i.getElementsByTagName("iframe").length,c=a+l+s+o;return c===0&&!this._getInnerText(i,!1)}),this._forEachNode(this._getAllNodesWithTag(e,["br"]),function(i){var a=this._nextNode(i.nextSibling);a&&a.tagName=="P"&&i.parentNode.removeChild(i)}),this._forEachNode(this._getAllNodesWithTag(e,["table"]),function(i){var a=this._hasSingleTagInsideElement(i,"TBODY")?i.firstElementChild:i;if(this._hasSingleTagInsideElement(a,"TR")){var l=a.firstElementChild;if(this._hasSingleTagInsideElement(l,"TD")){var s=l.firstElementChild;s=this._setNodeTag(s,this._everyNode(s.childNodes,this._isPhrasingContent)?"P":"DIV"),i.parentNode.replaceChild(s,i)}}})},_initializeNode:function(e){switch(e.readability={contentScore:0},e.tagName){case"DIV":e.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":e.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":e.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":e.readability.contentScore-=5;break}e.readability.contentScore+=this._getClassWeight(e)},_removeAndGetNext:function(e){var n=this._getNextNode(e,!0);return e.parentNode.removeChild(e),n},_getNextNode:function(e,n){if(!n&&e.firstElementChild)return e.firstElementChild;if(e.nextElementSibling)return e.nextElementSibling;do e=e.parentNode;while(e&&!e.nextElementSibling);return e&&e.nextElementSibling},_textSimilarity:function(e,n){var i=e.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),a=n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!i.length||!a.length)return 0;var l=a.filter(o=>!i.includes(o)),s=l.join(" ").length/a.join(" ").length;return 1-s},_checkByline:function(e,n){if(this._articleByline)return!1;if(e.getAttribute!==void 0)var i=e.getAttribute("rel"),a=e.getAttribute("itemprop");return(i==="author"||a&&a.indexOf("author")!==-1||this.REGEXPS.byline.test(n))&&this._isValidByline(e.textContent)?(this._articleByline=e.textContent.trim(),!0):!1},_getNodeAncestors:function(e,n){n=n||0;for(var i=0,a=[];e.parentNode&&(a.push(e.parentNode),!(n&&++i===n));)e=e.parentNode;return a},_grabArticle:function(e){this.log("**** grabArticle ****");var n=this._doc,i=e!==null;if(e=e||this._doc.body,!e)return this.log("No body found in document. Abort."),null;for(var a=e.innerHTML;;){this.log("Starting grabArticle loop");var l=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),s=[],o=this._doc.documentElement;let ke=!0;for(;o;){o.tagName==="HTML"&&(this._articleLang=o.getAttribute("lang"));var c=o.className+" "+o.id;if(!this._isProbablyVisible(o)){this.log("Removing hidden node - "+c),o=this._removeAndGetNext(o);continue}if(o.getAttribute("aria-modal")=="true"&&o.getAttribute("role")=="dialog"){o=this._removeAndGetNext(o);continue}if(this._checkByline(o,c)){o=this._removeAndGetNext(o);continue}if(ke&&this._headerDuplicatesTitle(o)){this.log("Removing header: ",o.textContent.trim(),this._articleTitle.trim()),ke=!1,o=this._removeAndGetNext(o);continue}if(l){if(this.REGEXPS.unlikelyCandidates.test(c)&&!this.REGEXPS.okMaybeItsACandidate.test(c)&&!this._hasAncestorTag(o,"table")&&!this._hasAncestorTag(o,"code")&&o.tagName!=="BODY"&&o.tagName!=="A"){this.log("Removing unlikely candidate - "+c),o=this._removeAndGetNext(o);continue}if(this.UNLIKELY_ROLES.includes(o.getAttribute("role"))){this.log("Removing content with role "+o.getAttribute("role")+" - "+c),o=this._removeAndGetNext(o);continue}}if((o.tagName==="DIV"||o.tagName==="SECTION"||o.tagName==="HEADER"||o.tagName==="H1"||o.tagName==="H2"||o.tagName==="H3"||o.tagName==="H4"||o.tagName==="H5"||o.tagName==="H6")&&this._isElementWithoutContent(o)){o=this._removeAndGetNext(o);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(o.tagName)!==-1&&s.push(o),o.tagName==="DIV"){for(var f=null,u=o.firstChild;u;){var m=u.nextSibling;if(this._isPhrasingContent(u))f!==null?f.appendChild(u):this._isWhitespace(u)||(f=n.createElement("p"),o.replaceChild(f,u),f.appendChild(u));else if(f!==null){for(;f.lastChild&&this._isWhitespace(f.lastChild);)f.removeChild(f.lastChild);f=null}u=m}if(this._hasSingleTagInsideElement(o,"P")&&this._getLinkDensity(o)<.25){var g=o.children[0];o.parentNode.replaceChild(g,o),o=g,s.push(o)}else this._hasChildBlockElement(o)||(o=this._setNodeTag(o,"P"),s.push(o))}o=this._getNextNode(o)}var k=[];this._forEachNode(s,function(G){if(!(!G.parentNode||typeof G.parentNode.tagName>"u")){var U=this._getInnerText(G);if(!(U.length<25)){var Ne=this._getNodeAncestors(G,5);if(Ne.length!==0){var ee=0;ee+=1,ee+=U.split(this.REGEXPS.commas).length,ee+=Math.min(Math.floor(U.length/100),3),this._forEachNode(Ne,function(V,le){if(!(!V.tagName||!V.parentNode||typeof V.parentNode.tagName>"u")){if(typeof V.readability>"u"&&(this._initializeNode(V),k.push(V)),le===0)var ce=1;else le===1?ce=2:ce=le*3;V.readability.contentScore+=ee/ce}})}}}});for(var w=[],T=0,S=k.length;T<S;T+=1){var A=k[T],R=A.readability.contentScore*(1-this._getLinkDensity(A));A.readability.contentScore=R,this.log("Candidate:",A,"with score "+R);for(var x=0;x<this._nbTopCandidates;x++){var P=w[x];if(!P||R>P.readability.contentScore){w.splice(x,0,A),w.length>this._nbTopCandidates&&w.pop();break}}}var y=w[0]||null,E=!1,d;if(y===null||y.tagName==="BODY"){for(y=n.createElement("DIV"),E=!0;e.firstChild;)this.log("Moving child out:",e.firstChild),y.appendChild(e.firstChild);e.appendChild(y),this._initializeNode(y)}else if(y){for(var v=[],_=1;_<w.length;_++)w[_].readability.contentScore/y.readability.contentScore>=.75&&v.push(this._getNodeAncestors(w[_]));var N=3;if(v.length>=N)for(d=y.parentNode;d.tagName!=="BODY";){for(var H=0,F=0;F<v.length&&H<N;F++)H+=Number(v[F].includes(d));if(H>=N){y=d;break}d=d.parentNode}y.readability||this._initializeNode(y),d=y.parentNode;for(var O=y.readability.contentScore,h=O/3;d.tagName!=="BODY";){if(!d.readability){d=d.parentNode;continue}var p=d.readability.contentScore;if(p<h)break;if(p>O){y=d;break}O=d.readability.contentScore,d=d.parentNode}for(d=y.parentNode;d.tagName!="BODY"&&d.children.length==1;)y=d,d=y.parentNode;y.readability||this._initializeNode(y)}var b=n.createElement("DIV");i&&(b.id="readability-content");var $=Math.max(10,y.readability.contentScore*.2);d=y.parentNode;for(var M=d.children,C=0,ve=M.length;C<ve;C++){var I=M[C],z=!1;if(this.log("Looking at sibling node:",I,I.readability?"with score "+I.readability.contentScore:""),this.log("Sibling has score",I.readability?I.readability.contentScore:"Unknown"),I===y)z=!0;else{var _e=0;if(I.className===y.className&&y.className!==""&&(_e+=y.readability.contentScore*.2),I.readability&&I.readability.contentScore+_e>=$)z=!0;else if(I.nodeName==="P"){var Ee=this._getLinkDensity(I),we=this._getInnerText(I),se=we.length;(se>80&&Ee<.25||se<80&&se>0&&Ee===0&&we.search(/\.( |$)/)!==-1)&&(z=!0)}}z&&(this.log("Appending node:",I),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(I.nodeName)===-1&&(this.log("Altering sibling:",I,"to div."),I=this._setNodeTag(I,"DIV")),b.appendChild(I),M=d.children,C-=1,ve-=1)}if(this._debug&&this.log("Article content pre-prep: "+b.innerHTML),this._prepArticle(b),this._debug&&this.log("Article content post-prep: "+b.innerHTML),E)y.id="readability-page-1",y.className="page";else{var Q=n.createElement("DIV");for(Q.id="readability-page-1",Q.className="page";b.firstChild;)Q.appendChild(b.firstChild);b.appendChild(Q)}this._debug&&this.log("Article content after paging: "+b.innerHTML);var oe=!0,j=this._getInnerText(b,!0).length;if(j<this._charThreshold)if(oe=!1,e.innerHTML=a,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:b,textLength:j});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:b,textLength:j});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:b,textLength:j});else{if(this._attempts.push({articleContent:b,textLength:j}),this._attempts.sort(function(G,U){return U.textLength-G.textLength}),!this._attempts[0].textLength)return null;b=this._attempts[0].articleContent,oe=!0}if(oe){var Qe=[d,y].concat(this._getNodeAncestors(d));return this._someNode(Qe,function(G){if(!G.tagName)return!1;var U=G.getAttribute("dir");return U?(this._articleDir=U,!0):!1}),b}}},_isValidByline:function(e){return typeof e=="string"||e instanceof String?(e=e.trim(),e.length>0&&e.length<100):!1},_unescapeHtmlEntities:function(e){if(!e)return e;var n=this.HTML_ESCAPE_MAP;return e.replace(/&(quot|amp|apos|lt|gt);/g,function(i,a){return n[a]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(i,a,l){var s=parseInt(a||l,a?16:10);return String.fromCharCode(s)})},_getJSONLD:function(e){var n=this._getAllNodesWithTag(e,["script"]),i;return this._forEachNode(n,function(a){if(!i&&a.getAttribute("type")==="application/ld+json")try{var l=a.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),s=JSON.parse(l);if(!s["@context"]||!s["@context"].match(/^https?\:\/\/schema\.org$/)||(!s["@type"]&&Array.isArray(s["@graph"])&&(s=s["@graph"].find(function(u){return(u["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!s||!s["@type"]||!s["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(i={},typeof s.name=="string"&&typeof s.headline=="string"&&s.name!==s.headline){var o=this._getArticleTitle(),c=this._textSimilarity(s.name,o)>.75,f=this._textSimilarity(s.headline,o)>.75;f&&!c?i.title=s.headline:i.title=s.name}else typeof s.name=="string"?i.title=s.name.trim():typeof s.headline=="string"&&(i.title=s.headline.trim());s.author&&(typeof s.author.name=="string"?i.byline=s.author.name.trim():Array.isArray(s.author)&&s.author[0]&&typeof s.author[0].name=="string"&&(i.byline=s.author.filter(function(u){return u&&typeof u.name=="string"}).map(function(u){return u.name.trim()}).join(", "))),typeof s.description=="string"&&(i.excerpt=s.description.trim()),s.publisher&&typeof s.publisher.name=="string"&&(i.siteName=s.publisher.name.trim()),typeof s.datePublished=="string"&&(i.datePublished=s.datePublished.trim());return}catch(u){this.log(u.message)}}),i||{}},_getArticleMetadata:function(e){var n={},i={},a=this._doc.getElementsByTagName("meta"),l=/\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi,s=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(a,function(o){var c=o.getAttribute("name"),f=o.getAttribute("property"),u=o.getAttribute("content");if(u){var m=null,g=null;f&&(m=f.match(l),m&&(g=m[0].toLowerCase().replace(/\s/g,""),i[g]=u.trim())),!m&&c&&s.test(c)&&(g=c,u&&(g=g.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),i[g]=u.trim()))}}),n.title=e.title||i["dc:title"]||i["dcterm:title"]||i["og:title"]||i["weibo:article:title"]||i["weibo:webpage:title"]||i.title||i["twitter:title"],n.title||(n.title=this._getArticleTitle()),n.byline=e.byline||i["dc:creator"]||i["dcterm:creator"]||i.author,n.excerpt=e.excerpt||i["dc:description"]||i["dcterm:description"]||i["og:description"]||i["weibo:article:description"]||i["weibo:webpage:description"]||i.description||i["twitter:description"],n.siteName=e.siteName||i["og:site_name"],n.publishedTime=e.datePublished||i["article:published_time"]||null,n.title=this._unescapeHtmlEntities(n.title),n.byline=this._unescapeHtmlEntities(n.byline),n.excerpt=this._unescapeHtmlEntities(n.excerpt),n.siteName=this._unescapeHtmlEntities(n.siteName),n.publishedTime=this._unescapeHtmlEntities(n.publishedTime),n},_isSingleImage:function(e){return e.tagName==="IMG"?!0:e.children.length!==1||e.textContent.trim()!==""?!1:this._isSingleImage(e.children[0])},_unwrapNoscriptImages:function(e){var n=Array.from(e.getElementsByTagName("img"));this._forEachNode(n,function(a){for(var l=0;l<a.attributes.length;l++){var s=a.attributes[l];switch(s.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(s.value))return}a.parentNode.removeChild(a)});var i=Array.from(e.getElementsByTagName("noscript"));this._forEachNode(i,function(a){var l=e.createElement("div");if(l.innerHTML=a.innerHTML,!!this._isSingleImage(l)){var s=a.previousElementSibling;if(s&&this._isSingleImage(s)){var o=s;o.tagName!=="IMG"&&(o=s.getElementsByTagName("img")[0]);for(var c=l.getElementsByTagName("img")[0],f=0;f<o.attributes.length;f++){var u=o.attributes[f];if(u.value!==""&&(u.name==="src"||u.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(u.value))){if(c.getAttribute(u.name)===u.value)continue;var m=u.name;c.hasAttribute(m)&&(m="data-old-"+m),c.setAttribute(m,u.value)}}a.parentNode.replaceChild(l.firstElementChild,s)}}})},_removeScripts:function(e){this._removeNodes(this._getAllNodesWithTag(e,["script","noscript"]))},_hasSingleTagInsideElement:function(e,n){return e.children.length!=1||e.children[0].tagName!==n?!1:!this._someNode(e.childNodes,function(i){return i.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(i.textContent)})},_isElementWithoutContent:function(e){return e.nodeType===this.ELEMENT_NODE&&e.textContent.trim().length==0&&(e.children.length==0||e.children.length==e.getElementsByTagName("br").length+e.getElementsByTagName("hr").length)},_hasChildBlockElement:function(e){return this._someNode(e.childNodes,function(n){return this.DIV_TO_P_ELEMS.has(n.tagName)||this._hasChildBlockElement(n)})},_isPhrasingContent:function(e){return e.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(e.tagName)!==-1||(e.tagName==="A"||e.tagName==="DEL"||e.tagName==="INS")&&this._everyNode(e.childNodes,this._isPhrasingContent)},_isWhitespace:function(e){return e.nodeType===this.TEXT_NODE&&e.textContent.trim().length===0||e.nodeType===this.ELEMENT_NODE&&e.tagName==="BR"},_getInnerText:function(e,n){n=typeof n>"u"?!0:n;var i=e.textContent.trim();return n?i.replace(this.REGEXPS.normalize," "):i},_getCharCount:function(e,n){return n=n||",",this._getInnerText(e).split(n).length-1},_cleanStyles:function(e){if(!(!e||e.tagName.toLowerCase()==="svg")){for(var n=0;n<this.PRESENTATIONAL_ATTRIBUTES.length;n++)e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[n]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName)!==-1&&(e.removeAttribute("width"),e.removeAttribute("height"));for(var i=e.firstElementChild;i!==null;)this._cleanStyles(i),i=i.nextElementSibling}},_getLinkDensity:function(e){var n=this._getInnerText(e).length;if(n===0)return 0;var i=0;return this._forEachNode(e.getElementsByTagName("a"),function(a){var l=a.getAttribute("href"),s=l&&this.REGEXPS.hashUrl.test(l)?.3:1;i+=this._getInnerText(a).length*s}),i/n},_getClassWeight:function(e){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var n=0;return typeof e.className=="string"&&e.className!==""&&(this.REGEXPS.negative.test(e.className)&&(n-=25),this.REGEXPS.positive.test(e.className)&&(n+=25)),typeof e.id=="string"&&e.id!==""&&(this.REGEXPS.negative.test(e.id)&&(n-=25),this.REGEXPS.positive.test(e.id)&&(n+=25)),n},_clean:function(e,n){var i=["object","embed","iframe"].indexOf(n)!==-1;this._removeNodes(this._getAllNodesWithTag(e,[n]),function(a){if(i){for(var l=0;l<a.attributes.length;l++)if(this._allowedVideoRegex.test(a.attributes[l].value))return!1;if(a.tagName==="object"&&this._allowedVideoRegex.test(a.innerHTML))return!1}return!0})},_hasAncestorTag:function(e,n,i,a){i=i||3,n=n.toUpperCase();for(var l=0;e.parentNode;){if(i>0&&l>i)return!1;if(e.parentNode.tagName===n&&(!a||a(e.parentNode)))return!0;e=e.parentNode,l++}return!1},_getRowAndColumnCount:function(e){for(var n=0,i=0,a=e.getElementsByTagName("tr"),l=0;l<a.length;l++){var s=a[l].getAttribute("rowspan")||0;s&&(s=parseInt(s,10)),n+=s||1;for(var o=0,c=a[l].getElementsByTagName("td"),f=0;f<c.length;f++){var u=c[f].getAttribute("colspan")||0;u&&(u=parseInt(u,10)),o+=u||1}i=Math.max(i,o)}return{rows:n,columns:i}},_markDataTables:function(e){for(var n=e.getElementsByTagName("table"),i=0;i<n.length;i++){var a=n[i],l=a.getAttribute("role");if(l=="presentation"){a._readabilityDataTable=!1;continue}var s=a.getAttribute("datatable");if(s=="0"){a._readabilityDataTable=!1;continue}var o=a.getAttribute("summary");if(o){a._readabilityDataTable=!0;continue}var c=a.getElementsByTagName("caption")[0];if(c&&c.childNodes.length>0){a._readabilityDataTable=!0;continue}var f=["col","colgroup","tfoot","thead","th"],u=function(g){return!!a.getElementsByTagName(g)[0]};if(f.some(u)){this.log("Data table because found data-y descendant"),a._readabilityDataTable=!0;continue}if(a.getElementsByTagName("table")[0]){a._readabilityDataTable=!1;continue}var m=this._getRowAndColumnCount(a);if(m.rows>=10||m.columns>4){a._readabilityDataTable=!0;continue}a._readabilityDataTable=m.rows*m.columns>10}},_fixLazyImages:function(e){this._forEachNode(this._getAllNodesWithTag(e,["img","picture","figure"]),function(n){if(n.src&&this.REGEXPS.b64DataUrl.test(n.src)){var i=this.REGEXPS.b64DataUrl.exec(n.src);if(i[1]==="image/svg+xml")return;for(var a=!1,l=0;l<n.attributes.length;l++){var s=n.attributes[l];if(s.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(s.value)){a=!0;break}}if(a){var o=n.src.search(/base64\s*/i)+7,c=n.src.length-o;c<133&&n.removeAttribute("src")}}if(!((n.src||n.srcset&&n.srcset!="null")&&n.className.toLowerCase().indexOf("lazy")===-1)){for(var f=0;f<n.attributes.length;f++)if(s=n.attributes[f],!(s.name==="src"||s.name==="srcset"||s.name==="alt")){var u=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(s.value)?u="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(s.value)&&(u="src"),u){if(n.tagName==="IMG"||n.tagName==="PICTURE")n.setAttribute(u,s.value);else if(n.tagName==="FIGURE"&&!this._getAllNodesWithTag(n,["img","picture"]).length){var m=this._doc.createElement("img");m.setAttribute(u,s.value),n.appendChild(m)}}}}})},_getTextDensity:function(e,n){var i=this._getInnerText(e,!0).length;if(i===0)return 0;var a=0,l=this._getAllNodesWithTag(e,n);return this._forEachNode(l,s=>a+=this._getInnerText(s,!0).length),a/i},_cleanConditionally:function(e,n){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(e,[n]),function(i){var a=function(d){return d._readabilityDataTable},l=n==="ul"||n==="ol";if(!l){var s=0,o=this._getAllNodesWithTag(i,["ul","ol"]);this._forEachNode(o,d=>s+=this._getInnerText(d).length),l=s/this._getInnerText(i).length>.9}if(n==="table"&&a(i)||this._hasAncestorTag(i,"table",-1,a)||this._hasAncestorTag(i,"code"))return!1;var c=this._getClassWeight(i);this.log("Cleaning Conditionally",i);var f=0;if(c+f<0)return!0;if(this._getCharCount(i,",")<10){for(var u=i.getElementsByTagName("p").length,m=i.getElementsByTagName("img").length,g=i.getElementsByTagName("li").length-100,k=i.getElementsByTagName("input").length,w=this._getTextDensity(i,["h1","h2","h3","h4","h5","h6"]),T=0,S=this._getAllNodesWithTag(i,["object","embed","iframe"]),A=0;A<S.length;A++){for(var R=0;R<S[A].attributes.length;R++)if(this._allowedVideoRegex.test(S[A].attributes[R].value))return!1;if(S[A].tagName==="object"&&this._allowedVideoRegex.test(S[A].innerHTML))return!1;T++}var x=this._getLinkDensity(i),P=this._getInnerText(i).length,y=m>1&&u/m<.5&&!this._hasAncestorTag(i,"figure")||!l&&g>u||k>Math.floor(u/3)||!l&&w<.9&&P<25&&(m===0||m>2)&&!this._hasAncestorTag(i,"figure")||!l&&c<25&&x>.2||c>=25&&x>.5||T===1&&P<75||T>1;if(l&&y){for(var E=0;E<i.children.length;E++)if(i.children[E].children.length>1)return y;let d=i.getElementsByTagName("li").length;if(m==d)return!1}return y}return!1})},_cleanMatchedNodes:function(e,n){for(var i=this._getNextNode(e,!0),a=this._getNextNode(e);a&&a!=i;)n.call(this,a,a.className+" "+a.id)?a=this._removeAndGetNext(a):a=this._getNextNode(a)},_cleanHeaders:function(e){let n=this._getAllNodesWithTag(e,["h1","h2"]);this._removeNodes(n,function(i){let a=this._getClassWeight(i)<0;return a&&this.log("Removing header with low class weight:",i),a})},_headerDuplicatesTitle:function(e){if(e.tagName!="H1"&&e.tagName!="H2")return!1;var n=this._getInnerText(e,!1);return this.log("Evaluating similarity of header:",n,this._articleTitle),this._textSimilarity(this._articleTitle,n)>.75},_flagIsActive:function(e){return(this._flags&e)>0},_removeFlag:function(e){this._flags=this._flags&~e},_isProbablyVisible:function(e){return(!e.style||e.style.display!="none")&&(!e.style||e.style.visibility!="hidden")&&!e.hasAttribute("hidden")&&(!e.hasAttribute("aria-hidden")||e.getAttribute("aria-hidden")!="true"||e.className&&e.className.indexOf&&e.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var e=this._doc.getElementsByTagName("*").length;if(e>this._maxElemsToParse)throw new Error("Aborting parsing document; "+e+" elements found")}this._unwrapNoscriptImages(this._doc);var n=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var i=this._getArticleMetadata(n);this._articleTitle=i.title;var a=this._grabArticle();if(!a)return null;if(this.log("Grabbed: "+a.innerHTML),this._postProcessContent(a),!i.excerpt){var l=a.getElementsByTagName("p");l.length>0&&(i.excerpt=l[0].textContent.trim())}var s=a.textContent;return{title:this._articleTitle,byline:i.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(a),textContent:s,length:s.length,excerpt:i.excerpt,siteName:i.siteName||this._articleSiteName,publishedTime:i.publishedTime}}},r.exports=t})(Ge);var St=Ge.exports,We={exports:{}};(function(r){var t={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function e(i){return(!i.style||i.style.display!="none")&&!i.hasAttribute("hidden")&&(!i.hasAttribute("aria-hidden")||i.getAttribute("aria-hidden")!="true"||i.className&&i.className.indexOf&&i.className.indexOf("fallback-image")!==-1)}function n(i,a={}){typeof a=="function"&&(a={visibilityChecker:a});var l={minScore:20,minContentLength:140,visibilityChecker:e};a=Object.assign(l,a);var s=i.querySelectorAll("p, pre, article"),o=i.querySelectorAll("div > br");if(o.length){var c=new Set(s);[].forEach.call(o,function(u){c.add(u.parentNode)}),s=Array.from(c)}var f=0;return[].some.call(s,function(u){if(!a.visibilityChecker(u))return!1;var m=u.className+" "+u.id;if(t.unlikelyCandidates.test(m)&&!t.okMaybeItsACandidate.test(m)||u.matches("li p"))return!1;var g=u.textContent.trim().length;return g<a.minContentLength?!1:(f+=Math.sqrt(g-a.minContentLength),f>a.minScore)})}r.exports=n})(We);var Lt=We.exports,Rt=St,Mt=Lt,It={Readability:Rt,isProbablyReaderable:Mt},Se=/highlight-(?:text|source)-([a-z0-9]+)/;function Bt(r){r.addRule("highlightedCodeBlock",{filter:function(t){var e=t.firstChild;return t.nodeName==="DIV"&&Se.test(t.className)&&e&&e.nodeName==="PRE"},replacement:function(t,e,n){var i=e.className||"",a=(i.match(Se)||[null,""])[1];return`

`+n.fence+a+`
`+e.firstChild.textContent+`
`+n.fence+`

`}})}function Dt(r){r.addRule("strikethrough",{filter:["del","s","strike"],replacement:function(t){return"~"+t+"~"}})}var Pt=Array.prototype.indexOf,Ot=Array.prototype.every,X={};X.tableCell={filter:["th","td"],replacement:function(r,t){return Ue(r,t)}};X.tableRow={filter:"tr",replacement:function(r,t){var e="",n={left:":--",right:"--:",center:":-:"};if(ge(t))for(var i=0;i<t.childNodes.length;i++){var a="---",l=(t.childNodes[i].getAttribute("align")||"").toLowerCase();l&&(a=n[l]||a),e+=Ue(a,t.childNodes[i])}return`
`+r+(e?`
`+e:"")}};X.table={filter:function(r){return r.nodeName==="TABLE"&&ge(r.rows[0])},replacement:function(r){return r=r.replace(`

`,`
`),`

`+r+`

`}};X.tableSection={filter:["thead","tbody","tfoot"],replacement:function(r){return r}};function ge(r){var t=r.parentNode;return t.nodeName==="THEAD"||t.firstChild===r&&(t.nodeName==="TABLE"||Ht(t))&&Ot.call(r.childNodes,function(e){return e.nodeName==="TH"})}function Ht(r){var t=r.previousSibling;return r.nodeName==="TBODY"&&(!t||t.nodeName==="THEAD"&&/^\s*$/i.test(t.textContent))}function Ue(r,t){var e=Pt.call(t.parentNode.childNodes,t),n=" ";return e===0&&(n="| "),n+r+" |"}function Ft(r){r.keep(function(e){return e.nodeName==="TABLE"&&!ge(e.rows[0])});for(var t in X)r.addRule(t,X[t])}function $t(r){r.addRule("taskListItems",{filter:function(t){return t.type==="checkbox"&&t.parentNode.nodeName==="LI"},replacement:function(t,e){return(e.checked?"[x]":"[ ]")+" "}})}function Gt(r){r.use([Bt,Dt,Ft,$t])}function Wt(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.hasOwn(e,n)&&(r[n]=e[n])}return r}function me(r,t){return Array(t+1).join(r)}function Ut(r){return r.replace(/^\n*/,"")}function Vt(r){for(var t=r.length;t>0&&r[t-1]===`
`;)t--;return r.substring(0,t)}var Kt=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function pe(r){return be(r,Kt)}var Ve=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function Ke(r){return be(r,Ve)}function Xt(r){return ze(r,Ve)}var Xe=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function zt(r){return be(r,Xe)}function jt(r){return ze(r,Xe)}function be(r,t){return t.indexOf(r.nodeName)>=0}function ze(r,t){return r.getElementsByTagName&&t.some(e=>r.getElementsByTagName(e).length)}var D={};D.paragraph={filter:"p",replacement:r=>`

`+r+`

`};D.lineBreak={filter:"br",replacement:(r,t,e)=>e.br+`
`};D.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:(r,t,e)=>{var n=Number(t.nodeName.charAt(1));if(e.headingStyle==="setext"&&n<3){var i=me(n===1?"=":"-",r.length);return`

`+r+`
`+i+`

`}else return`

`+me("#",n)+" "+r+`

`}};D.blockquote={filter:"blockquote",replacement:r=>(r=r.replace(/^\n+|\n+$/g,""),r=r.replace(/^/gm,"> "),`

`+r+`

`)};D.list={filter:["ul","ol"],replacement:(r,t)=>{var e=t.parentNode;return e.nodeName==="LI"&&e.lastElementChild===t?`
`+r:`

`+r+`

`}};D.listItem={filter:"li",replacement:(r,t,e)=>{r=r.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=e.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),l=Array.prototype.indexOf.call(i.children,t);n=(a?Number(a)+l:l+1)+".  "}return n+r+(t.nextSibling&&!/\n$/.test(r)?`
`:"")}};D.indentedCodeBlock={filter:(r,t)=>t.codeBlockStyle==="indented"&&r.nodeName==="PRE"&&r.firstChild&&r.firstChild.nodeName==="CODE",replacement:(r,t,e)=>`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`};D.fencedCodeBlock={filter:(r,t)=>t.codeBlockStyle==="fenced"&&r.nodeName==="PRE"&&r.firstChild&&r.firstChild.nodeName==="CODE",replacement:(r,t,e)=>{for(var n=t.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,l=e.fence.charAt(0),s=3,o=new RegExp("^"+l+"{3,}","gm"),c;c=o.exec(a);)c[0].length>=s&&(s=c[0].length+1);var f=me(l,s);return`

`+f+i+`
`+a.replace(/\n$/,"")+`
`+f+`

`}};D.horizontalRule={filter:"hr",replacement:(r,t,e)=>`

`+e.hr+`

`};D.inlineLink={filter:(r,t)=>t.linkStyle==="inlined"&&r.nodeName==="A"&&r.getAttribute("href"),replacement:(r,t)=>{var e=t.getAttribute("href");e&&(e=e.replace(/([()])/g,"\\$1"));var n=re(t.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+r+"]("+e+n+")"}};D.referenceLink={filter:(r,t)=>t.linkStyle==="referenced"&&r.nodeName==="A"&&r.getAttribute("href"),replacement:function(r,t,e){var n=t.getAttribute("href"),i=re(t.getAttribute("title"));i&&(i=' "'+i+'"');var a,l;switch(e.linkReferenceStyle){case"collapsed":a="["+r+"][]",l="["+r+"]: "+n+i;break;case"shortcut":a="["+r+"]",l="["+r+"]: "+n+i;break;default:{var s=this.references.length+1;a="["+r+"]["+s+"]",l="["+s+"]: "+n+i}}return this.references.push(l),a},references:[],append:function(r){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};D.emphasis={filter:["em","i"],replacement:(r,t,e)=>r.trim()?e.emDelimiter+r+e.emDelimiter:""};D.strong={filter:["strong","b"],replacement:(r,t,e)=>r.trim()?e.strongDelimiter+r+e.strongDelimiter:""};D.code={filter:r=>{var t=r.previousSibling||r.nextSibling,e=r.parentNode.nodeName==="PRE"&&!t;return r.nodeName==="CODE"&&!e},replacement:r=>{if(!r)return"";r=r.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(r)?" ":"",e="`",n=r.match(/`+/gm)||[];n.indexOf(e)!==-1;)e=e+"`";return e+t+r+t+e}};D.image={filter:"img",replacement:(r,t)=>{var e=re(t.getAttribute("alt")),n=t.getAttribute("src")||"",i=re(t.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+e+"]("+n+a+")":""}};function re(r){return r?r.replace(/(\n+\s*)+/g,`
`):""}function je(r){this.options=r,this._keep=[],this._remove=[],this.blankRule={replacement:r.blankReplacement},this.keepReplacement=r.keepReplacement,this.defaultRule={replacement:r.defaultReplacement},this.array=[];for(var t in r.rules)this.array.push(r.rules[t])}je.prototype={add:function(r,t){this.array.unshift(t)},keep:function(r){this._keep.unshift({filter:r,replacement:this.keepReplacement})},remove:function(r){this._remove.unshift({filter:r,replacement:()=>""})},forNode:function(r){if(r.isBlank)return this.blankRule;var t;return(t=fe(this.array,r,this.options))||(t=fe(this._keep,r,this.options))||(t=fe(this._remove,r,this.options))?t:this.defaultRule},forEach:function(r){for(var t=0;t<this.array.length;t++)r(this.array[t],t)}};function fe(r,t,e){for(var n=0;n<r.length;n++){var i=r[n];if(Yt(i,t,e))return i}}function Yt(r,t,e){var n=r.filter;if(typeof n=="string"){if(n===t.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(r,t,e))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function qt(r){var t=r.element,e=r.isBlock,n=r.isVoid,i=r.isPre||(u=>u.nodeName==="PRE");if(!(!t.firstChild||i(t))){for(var a=null,l=!1,s=null,o=Le(s,t,i);o!==t;){if(o.nodeType===3||o.nodeType===4){var c=o.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!l&&c[0]===" "&&(c=c.substr(1)),!c){o=he(o);continue}o.data=c,a=o}else if(o.nodeType===1)e(o)||o.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,l=!1):n(o)||i(o)?(a=null,l=!0):a&&(l=!1);else{o=he(o);continue}var f=Le(s,o,i);s=o,o=f}a&&(a.data=a.data.replace(/ $/,""),a.data||he(a))}}function he(r){var t=r.nextSibling||r.parentNode;return r.parentNode.removeChild(r),t}function Le(r,t,e){return r&&r.parentNode===t||e(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var ye=typeof window<"u"?window:{};function Jt(){var r=ye.DOMParser,t=!1;try{new r().parseFromString("","text/html")&&(t=!0)}catch{}return t}function Zt(){var r=()=>{};return Qt()?r.prototype.parseFromString=t=>{var e=new window.ActiveXObject("htmlfile");return e.designMode="on",e.open(),e.write(t),e.close(),e}:r.prototype.parseFromString=t=>{var e=document.implementation.createHTMLDocument("");return e.open(),e.write(t),e.close(),e},r}function Qt(){var r=!1;try{document.implementation.createHTMLDocument("").open()}catch{ye.ActiveXObject&&(r=!0)}return r}var en=Jt()?ye.DOMParser:Zt();function tn(r,t){var e;if(typeof r=="string"){var n=nn().parseFromString('<x-turndown id="turndown-root">'+r+"</x-turndown>","text/html");e=n.getElementById("turndown-root")}else e=r;return qt({element:e,isBlock:pe,isVoid:Ke,isPre:t.preformattedCode?rn:null}),e}var de;function nn(){return de=de||new en,de}function rn(r){return r.nodeName==="PRE"||r.nodeName==="CODE"}function an(r,t){return r.isBlock=pe(r),r.isCode=r.nodeName==="CODE"||r.parentNode.isCode,r.isBlank=sn(r),r.flankingWhitespace=on(r,t),r}function sn(r){return!Ke(r)&&!zt(r)&&/^\s*$/i.test(r.textContent)&&!Xt(r)&&!jt(r)}function on(r,t){if(r.isBlock||t.preformattedCode&&r.isCode)return{leading:"",trailing:""};var e=ln(r.textContent);return e.leadingAscii&&Re("left",r,t)&&(e.leading=e.leadingNonAscii),e.trailingAscii&&Re("right",r,t)&&(e.trailing=e.trailingNonAscii),{leading:e.leading,trailing:e.trailing}}function ln(r){var t=r.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function Re(r,t,e){var n,i,a;return r==="left"?(n=t.previousSibling,i=/ $/):(n=t.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):e.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!pe(n)&&(a=i.test(n.textContent))),a}var cn=Array.prototype.reduce,un=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function ae(r){if(!(this instanceof ae))return new ae(r);var t={rules:D,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:(e,n)=>n.isBlock?`

`:"",keepReplacement:(e,n)=>n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML,defaultReplacement:(e,n)=>n.isBlock?`

`+e+`

`:e};this.options=Wt({},t,r),this.rules=new je(this.options)}ae.prototype={turndown:function(r){if(!dn(r))throw new TypeError(r+" is not a string, or an element/document/fragment node.");if(r==="")return"";var t=Ye.call(this,new tn(r,this.options));return fn.call(this,t)},use:function(r){if(Array.isArray(r))for(var t=0;t<r.length;t++)this.use(r[t]);else if(typeof r=="function")r(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(r,t){return this.rules.add(r,t),this},keep:function(r){return this.rules.keep(r),this},remove:function(r){return this.rules.remove(r),this},escape:r=>un.reduce((t,e)=>t.replace(e[0],e[1]),r)};function Ye(r){return cn.call(r.childNodes,(t,e)=>{e=new an(e,this.options);var n="";return e.nodeType===3?n=e.isCode?e.nodeValue:this.escape(e.nodeValue):e.nodeType===1&&(n=hn.call(this,e)),qe(t,n)},"")}function fn(r){return this.rules.forEach(t=>{typeof t.append=="function"&&(r=qe(r,t.append(this.options)))}),r.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function hn(r){var t=this.rules.forNode(r),e=Ye.call(this,r),n=r.flankingWhitespace;return(n.leading||n.trailing)&&(e=e.trim()),n.leading+t.replacement(e,r,this.options)+n.trailing}function qe(r,t){var e=Vt(r),n=Ut(t),i=Math.max(r.length-e.length,t.length-n.length),a=`

`.substring(0,i);return e+a+n}function dn(r){return r!=null&&(typeof r=="string"||r.nodeType&&(r.nodeType===1||r.nodeType===9||r.nodeType===11))}function mn(r){return new ae(r)}const Me=.75,Ie=800,Be=500,gn=1.2,pn=.5,bn=7,yn=.01,vn=3,q={skip:Symbol("skip")},_n=["script","style","noscript","iframe","object","embed","link","meta","aside","nav","footer","header"],En=/article|blog|body|content|entry|main|news|pag(?:e|ination)|post|story/i,wn=/com(?:bx|ment|-)|contact|foot(?:er|note)?|media|promo|related|scroll|sidebar|sponsor|shopping|tags|tool|widget|nav(?:igation)?|menu|button|header|tab|toolbar|controls|action/i,De=/[,，][\s,，]*/g,Je=/(?:^|\s)(hidden$|^hidden\s|display-none|invisible|visually-hidden|hide$|^hide\s|d-none|none$|^none\s)/i;function Pe(){var r,t;try{if(!((t=(r=window.originalNodePrototypes)==null?void 0:r.Node)!=null&&t.cloneNode))return Oe();const e=Node.prototype.cloneNode;Node.prototype.cloneNode=window.originalNodePrototypes.Node.cloneNode;const n=document.cloneNode(!0);Node.prototype.cloneNode=e,Mn(document,n);const i=Nn(n),a=Ln(),l=Ze(n.body),s=kn(i,l);if(s<Me&&l.length<Ie||l.length<Be){const c=Bn(n);if(c.markdown.length>l.length*gn)return c;if(l.length<Be)return{title:a,markdown:"(No article found, please use visual navigation.)"}}else if(s>=Me&&l.length<Ie)return{title:a,markdown:"(No article found, please use visual navigation.)"};return{title:a,markdown:l}}catch(e){return console.error("extractArticle error:",e),Oe()}}function kn(r,t){let e=.5;const n=Math.min(t.length/1e4,1)*.2;e+=n;const i=(1-Math.min(r.linkDensity,.5)*2)*.15;e+=i;const a=Math.min(r.commas/50,1)*.1;e+=a;const l=Math.min(Math.max(r.score,0)/100,1)*.15;e+=l;const s=t.split(`

`).filter(f=>f.trim().length>0),o=Math.min(s.length/10,1)*.1;e+=o;const c=document.title&&t.includes(document.title)?.05:0;return e+=c,e=Math.max(0,Math.min(e,1)),Number.parseFloat(e.toFixed(2))}function Nn(r){const t=e=>{var s;if(!Rn(e))return e.nodeType===Node.TEXT_NODE?(((s=e.textContent)==null?void 0:s.trim())||"").length===0?(e[q.skip]=!0,J()):xn(e):(e[q.skip]=!0,J());const n=e,i=n.tagName.toLowerCase();if(_n.includes(i))return n[q.skip]=!0,J();const a=[];if(n.childNodes)for(let o=0;o<n.childNodes.length;o++){const c=t(n.childNodes[o]);a.push(c)}const l=Tn(n,a);return An(n,l)?(n[q.skip]=!0,J()):l};return t(r.body)}function Tn(r,t){const e=r.tagName.toLowerCase();let n=0,i=0,a=0;for(const m of t)n+=m.plainLength,i+=m.linkLength,a+=m.commas;e==="a"&&(i+=n,n=0);const l=n+i,s=l>0?i/l:0,o=Math.min(bn,a*pn)+Math.min(vn,Math.floor((n+i)*yn)),c=Cn(r),f=Sn(e),u=c+f+o;return{plainLength:n,linkLength:i,totalLength:l,linkDensity:s,commas:a,score:u}}function xn(r){var s;const t=((s=r.textContent)==null?void 0:s.trim())||"";if(!t)return J();const n=new TextEncoder().encode(t).length,i=t.length,a=n>i*2.5?i*2:i;let l=0;return De.test(t)&&(l=t.split(De).length-1),{plainLength:a,linkLength:0,totalLength:a,linkDensity:0,commas:l,score:0}}function J(){return{plainLength:0,linkLength:0,totalLength:0,linkDensity:0,commas:0,score:0}}function An(r,t){const e=r.tagName.toLowerCase();if(In(r))return!0;if(e==="img"){const i=Number.parseInt(r.getAttribute("width")||"0",10),a=Number.parseInt(r.getAttribute("height")||"0",10);if(i>0&&i<=32||a>0&&a<=32)return!0}return!!(t.score<-35||t.totalLength===0||["div","p","section","article"].includes(e)&&t.linkDensity>.8)}function Cn(r){var a,l;let t=0;const e=((a=r.getAttribute("id"))==null?void 0:a.toLowerCase())||"",n=((l=r.getAttribute("class"))==null?void 0:l.toLowerCase())||"",i=`${e} ${n}`.trim();return i&&(En.test(i)&&(t+=35),wn.test(i)&&(t-=35),Je.test(i)&&(t-=40)),t}function Sn(r){let t=0;switch(r){case"article":t+=35;break;case"section":t+=20;break;case"main":t+=25;break;case"div":t+=5;break;case"p":t+=15;break;case"blockquote":case"pre":case"td":case"code":t+=10;break;case"address":case"form":case"dd":case"dl":case"dt":case"li":case"ol":case"ul":t-=5;break;case"body":case"th":case"h2":case"h3":case"h4":case"h5":case"h6":t-=5;break;case"table":t-=10;break}return t}function Ln(){var e,n;const r=document.title.trim();if(r){const i=document.querySelectorAll("h1, h2, h3");for(const a of i){const l=((e=a.textContent)==null?void 0:e.trim())||"";if(l&&r.indexOf(l)>=0&&new TextEncoder().encode(l).length>=14)return l}return r}const t=document.querySelectorAll("h1");for(const i of t){const a=((n=i.textContent)==null?void 0:n.trim())||"";if(a&&new TextEncoder().encode(a).length>=14)return a}return""}function Ze(r){const t=mn({headingStyle:"atx"});return t.use(Gt),t.addRule("filterInvalidTag",{filter:e=>!!e[q.skip],replacement:()=>""}),t.addRule("keepOldLogic",{filter:["img","a"],replacement:(e,n)=>n.nodeName==="A"&&e?`[${e}]()`:""}),t.addRule("tables",{filter:"table",replacement:(e,n)=>n.querySelector("a")?`

${e.trim()}

`:e}),t.addRule("lineBreak",{filter:"br",replacement:(e,n,i)=>n.closest("td, th")?" ":`  
`}),t.turndown(r)}function Rn(r){return r.nodeType===Node.ELEMENT_NODE}function Mn(r,t){const e=r.querySelectorAll("*"),n=t.querySelectorAll("*");for(let i=0;i<Math.min(e.length,n.length);i++){const a=e[i],l=n[i];a&&l&&(l.originalOffsetWidth=a.offsetWidth,l.originalOffsetHeight=a.offsetHeight,l.originalBoundingRect=a.getBoundingClientRect())}}function In(r){var a,l;if(r instanceof HTMLElement){const s=r.originalOffsetWidth,o=r.originalOffsetHeight;if(s!==void 0&&o!==void 0){if(s<=1&&o<=1)return!0}else{const c=r.offsetWidth,f=r.offsetHeight,u=r.getBoundingClientRect();if(c<=1&&f<=1&&u.width<=1&&u.height<=1)return!0}}const t=((a=r.getAttribute("id"))==null?void 0:a.toLowerCase())||"",e=((l=r.getAttribute("class"))==null?void 0:l.toLowerCase())||"",n=`${t} ${e}`.trim();if(n&&Je.test(n))return!0;const i=r.getAttribute("style");if(i){const s=i.toLowerCase();if(s.includes("display: none")||s.includes("visibility: hidden")||s.includes("opacity: 0")||s.includes("width: 0")||s.includes("height: 0")||s.includes("position: absolute")&&(s.includes("left: -")||s.includes("top: -")))return!0}return!!(r.getAttribute("aria-hidden")==="true"||r.hasAttribute("hidden"))}function Oe(){return{title:document.title.trim()||"",markdown:document.body.innerText||""}}function Bn(r){const t=new It.Readability(r).parse();if(t){const{title:e,content:n}=t,i=Ze(n);return{title:e,markdown:i}}return{title:document.title.trim()||"",markdown:""}}const Dn=10;class Pn{async prepareArtifacts(t){try{await this.waitForDOMStable(5e3)||L.warn("DOM did not stabilize within timeout, proceeding with artifact extraction anyway");const{markdown:n,title:i}=await this.extractContent(),{highlightCount:a,elements:l,elementRects:s}=await this.collectElementRects();return{ok:!0,markdownContent:`# ${i}

${n}`,highlightCount:a,elements:l,elementRects:s}}catch(e){const n=e instanceof Error?e.message:String(e);return L.error("Failed to prepare artifacts",{reason:n}),{ok:!1,error:n,elements:[]}}}async waitForDOMStable(t=5e3){return await ft(2e3)?(setTimeout(()=>{},t),!0):(L.error("document.body not ready within timeout"),!1)}async extractContent(t=1){let e=Pe();for(let n=1;n<=t&&e.markdown.length<Dn;n++){L.debug(`Content too short (${e.markdown.length}), retrying (${n}/${t})`),await this.delay(500);const i=Pe();i.markdown.length>e.markdown.length&&(e=i)}return e}async collectElementRects(){const t=await K.getVisibleClickableRects({useCdpMarkers:!0}),e=K.clickableElements,n=t.e.length,i=t.e.map(l=>{var s;return{index:l.i,description:((s=e[l.i])==null?void 0:s.description)??`<${l.t}>`}}),a=t.e.map(l=>({index:l.i,tagName:l.t,inputType:l.it,x:l.b[0],y:l.b[1],width:l.b[2],height:l.b[3]}));return{highlightCount:n,elements:i,elementRects:a,visiblePayload:t}}delay(t){return new Promise(e=>setTimeout(e,t))}}const He=1e4;function On(r){if(!r||typeof r!="object")return!0;const t=r;if(!t.messageTimestamp||typeof t.messageTimestamp!="number")return!0;const e=Date.now(),n=e-t.messageTimestamp;return n>He?(L.warn("Message expired",{messageType:t.type,age:n,threshold:He,sentAt:new Date(t.messageTimestamp).toISOString(),receivedAt:new Date(e).toISOString()}),!1):!0}function Hn(r){chrome.runtime.onMessage.addListener(Fn(r))}function Fn(r){return(t,e,n)=>{if(!On(t)||!it(t))return!1;const i=t;return L.info("content background message received",{messageType:i.type,message:i}),r(i).then(a=>{L.info("handleBackgroundRequest response",{message:i,response:a}),n(a)}).catch(a=>{const l=a instanceof Error?a.message:String(a);L.error("Content script handler error",{reason:l,type:i.type}),n({ok:!1,error:l})}),!0}}class $n{constructor(){B(this,"intervalId",null);B(this,"portIntervalId",null);B(this,"port",null);B(this,"HEARTBEAT_INTERVAL",5e3);B(this,"PORT_HEARTBEAT_INTERVAL",2e4)}start(){this.intervalId===null&&(this.intervalId=window.setInterval(()=>{chrome.runtime.sendMessage({source:"content",type:"content/heartbeat"})},this.HEARTBEAT_INTERVAL),this.startPortKeepAlive(),L.debug("KeepAliveManager started with all anti-sleep mechanisms"))}startPortKeepAlive(){try{this.port=chrome.runtime.connect({name:"keep-alive"}),this.port.onDisconnect.addListener(()=>{L.warn("Keep-alive port disconnected, reconnecting..."),this.port=null,this.portIntervalId!==null&&(clearInterval(this.portIntervalId),this.portIntervalId=null),setTimeout(()=>{this.intervalId!==null&&this.startPortKeepAlive()},1e3)}),this.portIntervalId=window.setInterval(()=>{this.port&&this.port.postMessage({status:"ping"})},this.PORT_HEARTBEAT_INTERVAL),L.debug("Port heartbeat mechanism activated")}catch(t){L.warn("Failed to start port heartbeat",{error:t})}}stop(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null),this.portIntervalId!==null&&(clearInterval(this.portIntervalId),this.portIntervalId=null),this.port&&(this.port.disconnect(),this.port=null),L.debug("KeepAliveManager stopped and cleaned up")}}const Gn=1e3;class Wn{constructor(){B(this,"interactiveSince",null);B(this,"loadEventTimestamp",null);B(this,"pageReady",!1);B(this,"lastReadyState",null);B(this,"pageActionExecutor",new Ct);B(this,"artifactsHandler",new Pn);B(this,"keepAliveManager",new $n);B(this,"actionMask",new ot({onStop:()=>{this.actionMask.changeActionMaskState("idle"),this.emitBackgroundMessage({source:"content",type:"extension/unauthorize-task"})},onTakeover:()=>{this.emitBackgroundMessage({source:"content",type:"extension/stop-task"})},onResume:t=>{this.actionMask.changeActionMaskState("ongoing"),this.emitBackgroundMessage({source:"content",type:"extension/resume-task",summary:t})}}));this.initializeReadinessTracking(),Hn(t=>this.handleBackgroundRequest(t))}emitBackgroundMessage(t){nt(t)}initializeReadinessTracking(){const t=performance.now();document.readyState!=="loading"&&(this.interactiveSince=t),document.readyState==="complete"&&(this.loadEventTimestamp=t,this.pageReady=!0,this.lastReadyState="complete"),document.addEventListener("readystatechange",()=>{document.readyState!=="loading"&&this.interactiveSince===null&&(this.interactiveSince=performance.now()),document.readyState==="complete"&&(this.loadEventTimestamp=performance.now(),this.pageReady=!0,this.lastReadyState="complete")}),window.addEventListener("DOMContentLoaded",()=>{this.interactiveSince===null&&(this.interactiveSince=performance.now()),this.lastReadyState=document.readyState}),window.addEventListener("load",()=>{this.loadEventTimestamp=performance.now(),this.pageReady=!0,this.lastReadyState="complete"})}destroy(){L.info("ContentApp destroyed")}getReadinessDetails(){const t=performance.now(),e=document.readyState;e!=="loading"&&this.interactiveSince===null&&(this.interactiveSince=t),e==="complete"&&this.loadEventTimestamp===null&&(this.loadEventTimestamp=t);const n=this.interactiveSince!==null?t-this.interactiveSince:void 0,i=this.loadEventTimestamp!==null?t-this.loadEventTimestamp:void 0,a=e==="complete"||e==="interactive"&&typeof n=="number"&&n>=Gn;return a&&!this.pageReady&&(this.pageReady=!0),this.lastReadyState!==e&&(this.lastReadyState=e,L.debug("Document readyState updated",{readyState:e,sinceInteractiveMs:n,sinceLoadMs:i})),{ready:a,readyState:e,sinceInteractiveMs:n,sinceLoadMs:i}}handleCheckReady(){const t=this.pageReady,e=this.getReadinessDetails();return!t&&e.ready&&L.info("Page reported ready for automation",{readyState:e.readyState,sinceInteractiveMs:e.sinceInteractiveMs,sinceLoadMs:e.sinceLoadMs}),e.ready?{ok:!0,ready:!0,readyState:e.readyState,sinceInteractiveMs:e.sinceInteractiveMs,sinceLoadMs:e.sinceLoadMs}:{ok:!0,ready:!1,readyState:e.readyState,sinceInteractiveMs:e.sinceInteractiveMs,sinceLoadMs:e.sinceLoadMs}}async handleBackgroundRequest(t){switch(t.type){case"page/execute-action":return await this.executePageAction(t.action);case"page/prepare-artifacts":return this.prepareArtifacts(t.maxTimeout);case"page/check-ready":return this.handleCheckReady();case"page/toggle-page-effect":return this.handleTogglePageEffect(t.state);case"page/event-unblock":return this.actionMask.allowCDP(),{ok:!0};case"page/event-block":return this.actionMask.disableCDP(),{ok:!0};default:{const e=t;return L.warn("Unhandled message type",e),{ok:!1,error:"Unsupported message type"}}}}async executePageAction(t){if(this.keepAliveManager.start(),!this.pageReady){const e=this.getReadinessDetails();e.ready?this.pageReady=!0:L.warn("Received automation action before page reported as ready",{action:t.type,readyState:e.readyState,sinceInteractiveMs:e.sinceInteractiveMs,sinceLoadMs:e.sinceLoadMs})}try{const e=new Promise((i,a)=>setTimeout(()=>{a(new Error("timeout"))},15e3)),n=await Promise.race([this.pageActionExecutor.execute(t),e]).finally();return{ok:n.success,message:n.message,data:n.data,error:n.error}}catch(e){if(e instanceof Error&&e.message==="timeout")return{ok:!1,message:"Action execution timeout (15s)",error:"Action execution timeout (15s)",data:null};throw e}}async prepareArtifacts(t){return await this.artifactsHandler.prepareArtifacts(t)}async handleTogglePageEffect(t){L.info("handleTogglePageEffect",{state:t});try{return this.actionMask.changeActionMaskState(t),{ok:!0,state:t}}catch(e){const n=e instanceof Error?e.message:String(e);return L.error("Failed to toggle page effect",{reason:n,state:t}),{ok:!1,error:n}}}}new Wn;
