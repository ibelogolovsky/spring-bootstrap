var editModal = document.getElementById('editModal')
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget

    var userId = button.getAttribute('data-bs-userid')
    var firstName = button.getAttribute('data-bs-firstname')
    var lastName = button.getAttribute('data-bs-lastname')
    var age = button.getAttribute('data-bs-age')
    var email = button.getAttribute('data-bs-email')

    var modalIdInput = document.getElementById('idEdit')
    var modalFirstNameInput = document.getElementById('firstNameEdit')
    var modalLastNameInput = document.getElementById('lastNameEdit')
    var modalAgeInput = document.getElementById('ageEdit')
    var modalEmailInput = document.getElementById('emailEdit')

    modalIdInput.value = 123
    modalFirstNameInput.value = firstName
    modalLastNameInput.valud = lastName
    modalAgeInput.value = age
    modalEmailInput.value = email
})