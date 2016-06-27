function getFriend() {

    let request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        // responseText is a string. Need to parse it as JSON.
        let friend = JSON.parse(this.responseText);
        friend = friend.results[0];
        console.log(friend);

        let friendInfo = document.createElement('row');

        friendInfo.innerHTML = `
          <div class="col-sm-4">
            <img src='${friend.results.picture.medium}' />
            <p>Hi I'm ${friend.name.first}.</p>
            <button>${greetString}</button>
          </div>
        `;
        document.getElementsById('to-be-friends').appendChild('friendInfo.innerHTML')
            // here's what i want you to do
        request.open('GET', 'https://randomuser.me/api/');
        // actually do it
        request.send();
    })
};

window.addEventListener('load', function() {
    console.log('page has loaded');
console.log(getFriend);    

});
