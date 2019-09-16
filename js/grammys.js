$.ajax({
    url: 'https://the-vala.github.io/lab3/data/grammys.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {

        let newHTML = ''

        for (let i = 0; i < data.fields.length; i++) {
            newHTML += `
            <option value="${data.fields[i].field_id}">
                ${data.fields[i].field}
            </option>
            `
        }

        $('#category_types').append(newHTML)
        
    },
    error: function (errorMsg) {
        console.log(errorMsg)
    }
})