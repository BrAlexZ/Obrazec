  fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'UPN Oddan',
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
        timerProgressBar: true,
    }).then((result) => {
        document.getElementById('fullForm').submit();
    });
});
