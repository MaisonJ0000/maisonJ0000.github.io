- window.MSStream 등에서 타입 오류 날 때

declare global (or window) 말고
(window as any).MSStream

