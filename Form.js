export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }
  getFormData() {
    const formData = new FormData(this.form)
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }
  clear() {
    this.form.reset();
  }
}


