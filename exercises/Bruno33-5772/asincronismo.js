const ONE_SECOND_IN_MS = 1000;

function countSeconds (number) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(console.log);
        }, ONE_SECOND_IN_MS);
    });
};

async function count() {
    for (var i = 1; i <= 10; i++)
    {
        const result = await countSeconds(i);
        result(i);
    }
}

count();