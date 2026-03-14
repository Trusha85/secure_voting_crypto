let votes = {
    'Elephant': 0,
    'DEER': 0,
    'LION': 0
};

let encryptedVotes = [];

function paillierEncrypt(plaintext, publicKey) {
    const n = publicKey.n;
    const g = publicKey.g;
    a = Math.random();
    const r = Math.floor(a * (n - 1)) + 1;
    const ciphertext = (Math.pow(g, plaintext) * Math.pow(r, n)) % (n * n);
    return ciphertext;
}

const publicKey = {
    n: 23,
    g: 24
};

function castVote(candidate) {
    let vote = 0;
    if (candidate === 'Elephant') {
        vote = 1;
        votes['Elephant']++;
    } else if (candidate === 'DEER') {
        vote = 2;
        votes['DEER']++;
    } else if (candidate === 'LION') {
        vote = 3;
        votes['LION']++;
    }
    const encryptedVote = paillierEncrypt(vote, publicKey);
    encryptedVotes.push(encryptedVote);
    alert(`vote for ${candidate}  cast successfully!`);
    document.getElementById('encryptedVotes').value = encryptedVotes.join("\n");
}

function showResults() {
    let password = prompt("Enter the password to view results:");
    if (password === "secure123") {
        let resultStr = "Vote counts for each candidate:\n";
        resultStr += `Candidate A: ${votes['Elephant']} votes\n`;
        resultStr += `Candidate B: ${votes['DEER']} votes\n`;
        resultStr += `Candidate C: ${votes['LION']} votes\n`;
        document.getElementById('results').innerText = resultStr;
    } else {
        alert("Incorrect password! Access denied.");
    }
}
/* DOCUMENTATION 
HERE IN THIS JS CODE WE HAVE USED THE PAILLIER LIBRARY FOR THE VOTE ENCRYPTION WE HAVE TRIED TO USE PARTIAL HOMOMORPHIC WAY THROUGH WHICH WE 
ENCRYPTED THE VOTES OF THE VOTERS. WE HAVE ALSO USED THE MATH LIBRARY FOR POWER(pow) FUNCTION AND RANDOM FUNCTION. 
HERE,
n,g = PUBLIC KEY.
r = Random Nounce added for randomness.
 For viewing the result we add password so that only authorised Person Can Access The resut.
*/
