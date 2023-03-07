export function loadContactPage() {
    const contactDiv = document.createElement('div');       
    contactDiv.classList.add('contact-div');

    const contactDivH2 = document.createElement('h2');
    contactDivH2.textContent = "Contact Us";

    const contactForm = document.createElement('form');
    contactForm.setAttribute('id', 'contact-form');

    const labelName = document.createElement('label');
    labelName.setAttribute('for', "name");
    labelName.textContent = "Name:";

    const labelNameInput = document.createElement('input');
    labelNameInput.setAttribute("type", "text");
    labelNameInput.setAttribute("id", "name");
    labelNameInput.setAttribute("name", "name");
    labelNameInput.setAttribute("required", "");

    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', "email");
    labelEmail.textContent = "Email:";

    const labelEmailInput = document.createElement('input');
    labelEmailInput.setAttribute("type", "email");
    labelEmailInput.setAttribute("id", "email");
    labelEmailInput.setAttribute("name", "email");
    labelEmailInput.setAttribute("required", "");

    const labelText = document.createElement('label');
    labelText.setAttribute('for', "message");
    labelText.textContent = "Message:";

    const labelTextInput = document.createElement('textarea');
    labelTextInput.setAttribute("rows", "5");
    labelTextInput.setAttribute("id", "message");
    labelTextInput.setAttribute("name", "message");
    labelTextInput.setAttribute("required", "");

    const contactButton = document.createElement('button');
    contactButton.setAttribute("type", "submit");
    contactButton.textContent = "Send";

    contactForm.appendChild(labelName);
    contactForm.appendChild(labelNameInput);
    contactForm.appendChild(labelEmail);
    contactForm.appendChild(labelEmailInput);
    contactForm.appendChild(labelText);
    contactForm.appendChild(labelTextInput);
    contactForm.appendChild(contactButton);

    contactDiv.appendChild(contactDivH2);
    contactDiv.appendChild(contactForm);

    return contactDiv;


}