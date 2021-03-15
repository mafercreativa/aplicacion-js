/*class Item {
    constructor(time, work, place) {
        this.time = time;
        this.work = work;
        this.place = place;
    }
}*/

class Item {
    constructor(hour, minute, meridiem, work, place) {
        this.hour = hour;
        this.minute = minute;
        this.meridiem = meridiem;
        this.work = work;
        this.place = place;
    }
}

class UI {
    addWork(item) {
        const workList = document.getElementById('work-list');
        const element = document.createElement('div');
        element.innerHTML =`
            <div class="card mb-4">
                <div class="card-header">
                    ${item.hour}:${item.minute} ${item.meridiem}
                </div>
                <div class="card-body row card-list">
                    <div class="workResume col-md-9 active">
                     ${item.work} | ${item.place} 
                    </div>
                    <div class="col-md-3 text-right">
                        <a href="#" name="done" class="btn btn-primary doneB">Done!</a>
                        <a href="#" name="delete" class="btn btn-secondary">&times;</a>
                    </div>
                </div>
            </div>
        `;
        workList.appendChild(element);

    }
    resetForm() {
        document.getElementById('work-form').reset();
    }
    deleteWork(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
    doneWork(element) {
        if(element.name === 'done') {
            var a = element.parentElement.parentElement;
            var div = a.querySelector('.workResume');
            div.classList.toggle('strike');
            a.classList.toggle('opacity');
            //var b = element.parentElement;
            //b.querySelector('.doneB').remove();
        }
    }

}


// DOM Events

document
    .getElementById('work-form')
    .addEventListener('submit', function(e) {
        // Override the default Form behaviour
        e.preventDefault();

        // Getting Form Values
        //const time = document.getElementById('time').value;
        const hour = document.getElementById('hour').value;
        const minute = document.getElementById('minute').value;
        const meridiem = document.getElementById('meridiem').value;
        const work = document.getElementById('work').value;
        const place = document.getElementById('place').value;

        // Create a new Object Product
        //const item = new Item(time, work, place);
        const item = new Item(hour, minute, meridiem, work, place);
        
        // Create a new UI instance
        const ui = new UI();
        ui.addWork(item);
        ui.resetForm();

    });

document
    .getElementById('work-list')
    .addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteWork(e.target);
        ui.doneWork(e.target);

    });
    