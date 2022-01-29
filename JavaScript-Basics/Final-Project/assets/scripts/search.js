const querryInput = document.getElementById('query');
const googleBtn = document.getElementById('google-btn');
const bingBtn = document.getElementById('bing-btn');
const searchErr = document.getElementById('large-error-p');

googleBtn.addEventListener('click', ()=>{
    if(querryInput.value.trim() === ""){
        searchErr.style.display = "block";
        return;
    }

    window.location.href = `https://google.com/search?q=${querryInput.value.trim()}`;
});

bingBtn.addEventListener('click', ()=>{
    if(querryInput.value.trim() === ""){
        searchErr.style.display = "block";
        return;
    }

    window.location.href = `https://bing.com/search?q=${querryInput.value.trim()}`;
});

// Honestly I couldn't figure out how to convert the spaces into a plus :(

// let final = querryInput.value.replace(/\s+/g,"+");
// querryInput.value.trim()
// let final = text.replace(' ', '+'); 