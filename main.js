window.onload = function () {
    handleUpdate();
}

const handleUpdate = async () => {
    try {
        const data = await fetch("https://catfact.ninja/fact");
        if (data.status === 200) {
            const catFact = await data.json();
            document.getElementById("cat_fact").innerHTML = catFact.fact;
        } else {
            throw new Error("status code is not 200");
        }
    } catch (err) {
        throw err;
    }
}
