export class Form{
  constructor(formId) {
    this.form = document.getElementById(formId);
  }
  getFormData() {
    const formData = new FormData(this.form)
    return Object.fromEntries(formData.entries());
  }
  clear() {
    this.form.reset();
  }
}