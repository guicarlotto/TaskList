function adicionarTarefaDia(event) {
    event.preventDefault();
    
    var descriptionInput = document.getElementById('tarefaDia');
    var taskList = document.getElementById('listaDeTarefasDia');
    var description = descriptionInput.value.trim();
    
    if (description !== '') {
        var listItem = document.createElement('li');
        listItem.innerHTML = description;
        
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remover';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            listItem.remove();
        };
        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        descriptionInput.value = '';
    }
}

function adicionarTarefaNoite(event) {
    event.preventDefault();
    
    var descriptionInput = document.getElementById('tarefaNoite');
    var taskList = document.getElementById('listaDeTarefasNoite');
    var description = descriptionInput.value.trim();
    
    if (description !== '') {
        var listItem = document.createElement('li');
        listItem.innerHTML = description;
        
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remover';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            listItem.remove();
        };
        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        descriptionInput.value = '';
    }
}