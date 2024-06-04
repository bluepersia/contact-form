const firstNameEl = document.getElementById ('cmp__first-name');
const lastNameEl = document.getElementById ('cmp__last-name');
const emailEl = document.getElementById ('cmp__email')
const queryContainer = document.getElementById ('cmp__query-container');
const messageEl = document.getElementById ('cmp__message');
const consentEl = document.getElementById ('cmp__consent');

document.getElementById ('cmp__form').addEventListener ('submit', submit);

function submit (e){
    e.preventDefault ();

    const formData = new FormData (e.target);

    checkInput (firstNameEl);
    checkInput (lastNameEl);
    checkInput(emailEl);

    queryContainer.classList.remove ('invalid');
    if (!formData.get ('query'))
        queryContainer.classList.add ('invalid');

    checkTextArea (messageEl);
    checkInput (consentEl);

}

function setError (err, input) 
{
    if (!err)
    {
        input.parentElement.classList.remove ('invalid');
        return;
    }

    input.parentElement.classList.add ('invalid');
    input.parentElement.querySelector ('.cmp__input-error').textContent = err;
}

function checkInput (input) 
{
    if (input.type === 'text')
    {
        if (input.dataset.required && !input.value)
        {   
            setError ('This field is required', input);
            return;
        }
        if (input.dataset.isemail && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value) )
        {
            setError ('Must be a valid email', input)
            return;
        }
    }
    else if (input.type === 'checkbox') 
    {
        if(input.dataset.required && !input.checked)
        {
            setError (input.dataset.required, input);
            return;
        }
    }  

    setError ('', input);
}


function checkTextArea (textArea) 
{
        if (textArea.dataset.required && !textArea.value)
        {   
            setError ('This field is required', textArea);
            return;
        }
    
    setError ('', textArea);
}


