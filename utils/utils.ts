export function detectIntersection(el: HTMLElement) {
	const io = new IntersectionObserver(ioHandler);

	function ioHandler(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return;

			entry.target.classList.add('intersected');

			observer.disconnect();
		});
	}

	io.observe(el);

	return io;
}