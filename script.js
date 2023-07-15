function calculateProperties() {
    var sequenceInput = document.getElementById('sequenceInput');
    var sequence = sequenceInput.value.trim();
  
    if (sequence !== '') {
      var resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '';
  
      var length = sequence.length;
      var aminoAcidCount = countAminoAcids(sequence);
      var molecularWeight = calculateMolecularWeight(sequence);
      var charge = calculateCharge(sequence);
  
      var lengthElement = document.createElement('p');
      lengthElement.innerHTML = 'Length: <span>' + length + '</span>';
      resultContainer.appendChild(lengthElement);
  
      var aminoAcidCountElement = document.createElement('p');
      aminoAcidCountElement.innerHTML = 'Amino Acid Count: <span>' + aminoAcidCount + '</span>';
      resultContainer.appendChild(aminoAcidCountElement);
  
      var molecularWeightElement = document.createElement('p');
      molecularWeightElement.innerHTML = 'Molecular Weight: <span>' + molecularWeight + '</span>';
      resultContainer.appendChild(molecularWeightElement);
  
      var chargeElement = document.createElement('p');
      chargeElement.innerHTML = 'Charge: <span>' + charge + '</span>';
      resultContainer.appendChild(chargeElement);
  
      var homeSection = document.getElementById('home');
      var resultSection = document.getElementById('result');
      homeSection.style.display = 'none';
      resultSection.style.display = 'block';
    }
  }
  
 
function countAminoAcids(sequence) {
    // Remove any non-amino acid characters (e.g., whitespace, numbers, special characters)
    sequence = sequence.replace(/[^A-Z]/g, '');
  
    // Count the unique amino acids in the sequence
    var aminoAcids = [...new Set(sequence)];
    var count = aminoAcids.length;
  
    return count;
  }
  
  function calculateMolecularWeight(sequence) {
    // Molecular weights of amino acids (in g/mol)
    var aminoAcidWeights = {
      A: 71.08,
      C: 103.15,
      D: 115.09,
      E: 129.12,
      F: 147.18,
      G: 57.05,
      H: 137.14,
      I: 113.16,
      K: 128.17,
      L: 113.16,
      M: 131.20,
      N: 114.11,
      P: 97.12,
      Q: 128.13,
      R: 156.19,
      S: 87.08,
      T: 101.11,
      V: 99.13,
      W: 186.22,
      Y: 163.18
    };
  
    // Calculate the molecular weight by summing the weights of each amino acid
    var weight = 0;
    for (var i = 0; i < sequence.length; i++) {
      var aminoAcid = sequence[i];
      weight += aminoAcidWeights[aminoAcid] || 0;
    }
  
    return weight.toFixed(2);
  }
  
  function calculateCharge(sequence) {
    // Net charge of amino acids at pH 7
    var aminoAcidCharges = {
      A: 0,
      C: 0,
      D: -1,
      E: -1,
      F: 0,
      G: 0,
      H: +1,
      I: 0,
      K: +1,
      L: 0,
      M: 0,
      N: 0,
      P: 0,
      Q: 0,
      R: +1,
      S: 0,
      T: 0,
      V: 0,
      W: 0,
      Y: 0
    };
  
    // Calculate the charge by summing the charges of each amino acid
    var charge = 0;
    for (var i = 0; i < sequence.length; i++) {
      var aminoAcid = sequence[i];
      charge += aminoAcidCharges[aminoAcid] || 0;
    }
  
    return charge;
  }
  
  
  function goToHome() {
    var homeSection = document.getElementById('home');
    var resultSection = document.getElementById('result');
    homeSection.style.display = 'block';
    resultSection.style.display = 'none';
    document.getElementById('sequenceInput').value = '';
  }
  