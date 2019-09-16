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
        loadCategoriesJSON()
    },
    error: function (errorMsg) {
        console.log(errorMsg)
    }
})

function loadCategoriesJSON () {
    $.ajax({
        url: 'https://the-vala.github.io/lab3/data/grammys.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#category_types').on('change', function (event) {
                let id = $(this).val()
                let newHTML = ''

                for (let i = 0; i < data.fields.length; i++) {
                    if (id == data.fields[i].field_id) {

                        newHTML += `
                                    <h2>
                                        ${data.fields[i].field}
                                    </h2>
                                    `

                        if (data.fields[i].description) {
                            newHTML += `
                                        <p class="description">
                                            ${data.fields[i].description}
                                        </p>
                                        `
                        }

                        for (let j = 0; j < data.fields[i].categories.length; j++) {
                            newHTML += `
                                        <h3>${data.fields[i].categories[j].category_name}</h3>
                                        <ul>
                                        `

                            for (let k = 0; k < data.fields[i].categories[j].nominees.length; k++) {
                                newHTML += `
                                            <li>
                                            <h4>${data.fields[i].categories[j].nominees[k].nominee}</h4>
                                            <p>${data.fields[i].categories[j].nominees[k].artist}</p>
                                            <p class="description">${data.fields[i].categories[j].nominees[k].info}</p>
                                            `
    
                            }

                            newHTML += `
                                        </ul>
                                        <hr>
                                        `

                        }

                        $('#nominees_section').append(newHTML)
                    }
                }
            })
        },
        error: function (errorMsg) {
            console.log(errorMsg)
        }
    })
}