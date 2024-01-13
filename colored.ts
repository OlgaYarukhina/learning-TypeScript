function changeBgColor(p: HTMLElement): void {
    p.style.background = 'blue';
}

let ps = document.querySelectorAll('p');
ps.forEach((el: Element) => {
  (el as HTMLElement).onclick = () => changeBgColor(el as HTMLElement);
});