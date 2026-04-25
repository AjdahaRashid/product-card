export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');
        this.closeBtn = this.modal.querySelector('.modal-close-button'); 
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        
        this.handleClose = this.closeModal.bind(this);
        
        this.#initOpen(buttonId);
    }

    openModal() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        this.#initClose();
    }

    closeModal() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
        this.#removeCloseListeners();
    }

    #initOpen(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => this.openModal());
        }
    }

    #initClose() {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', this.handleClose);
        }
        if (this.shouldCloseOnOverlay && this.overlay) {
            this.overlay.addEventListener('click', this.handleClose);
        }
    }

    #removeCloseListeners() {
        if (this.closeBtn) {
            this.closeBtn.removeEventListener('click', this.handleClose);
        }
        if (this.overlay) {
            this.overlay.removeEventListener('click', this.handleClose);
        }
    }
}