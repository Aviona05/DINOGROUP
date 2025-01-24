//simulated AI user statistics
let aiUserCount = 75000000;
let lastUpdateTime = new Date().toLocaleTimeString();

//the update stat functions
function updateAIUsage() {
    aiUserCount += Math.floor(Math.random() * 1000000);
    lastUpdateTime = new Date().toLocaleTimeString();

    //update the content dynamically
    document.getElementById('ai-users').textContent = aiUserCount.toLocaleString();
    document.getElementById('last-update').textContent = lastUpdateTime;
}

//initial update on AI usage
updateAIUsage();

//update every 10 seconds (simulation of real-time data)
setInterval(updateAIUsage, 10000);