$('input[name=SavingThrow]').change(function() {
    const max = 2;
    if ($('input[name=SavingThrow]:checked').length == max) {
        $('input[name=SavingThrow]').attr('disabled', 'disabled');
        $('input[name=SavingThrow]:checked').removeAttr('disabled');
    } else {
        $('input[name=SavingThrow]').removeAttr('disabled');
    }
});
