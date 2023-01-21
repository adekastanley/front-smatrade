
const allResources = Array.from(document.querySelectorAll('.resource'));
const filterResources = document.querySelector( '#filter-form')



filterResources.addEventListener('change', () => {
  

        if (filterResources.value === 'E-dividend'){
            allResources.forEach( e => {
                if (e.classList.contains( "e-dividend")){
    
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                    
    
                    
                }
            })
        }
        if (filterResources.value === 'fgn'){
            allResources.forEach( e => {
                if (e.classList.contains( "fgn")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
        if (filterResources.value === 'transfer'){
            allResources.forEach( e => {
                if (e.classList.contains( "transfer")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
        if (filterResources.value === 'update'){
            allResources.forEach( e => {
                if (e.classList.contains( "update")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
    
    })


