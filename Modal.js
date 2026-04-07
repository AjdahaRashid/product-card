export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeBtn = this.modal.querySelector('.close-btn');
        this.overlay = this.modal.querySelector('.overlay');
    }

    open() {
        this.modal.classList.add('modal-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
    }

    init() {
        // Клик по крестику
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        // Клик по темному фону (оверлею)
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.close());
        }
    }
}