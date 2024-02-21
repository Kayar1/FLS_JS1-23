const text = `From Wikipedia, the free encyclopedia
"Turing" redirects here. For other uses, see Turing (disambiguation).
Alan Turing

OBE FRS
Turing in 1936
Born	Alan Mathison Turing

23 June 1912
Maida Vale, London, England
Died	7 June 1954 (aged 41)
Wilmslow, Cheshire, England
Cause of death	Disputed (Cyanide poisoning or Suicide)[note 1]
Education	Sherborne School
Alma mater	

    University of Cambridge (BA, MA)
    Princeton University (PhD)

Known for	

    Cryptanalysis of the Enigma
    Turing's proof
    Turing machine
    Turing test
    Unorganised machine
    Turing pattern
    Turing reduction
    "The Chemical Basis of Morphogenesis"

Partner	Joan Clarke[note 2]
Awards	Smith's Prize (1936)
Scientific career
Fields	

    Logic
    Mathematics
    Cryptanalysis
    Computer science
    Mathematical and theoretical biology[1]

Institutions	

    University of Manchester
    Government Code and Cypher School
    National Physical Laboratory

Thesis	Systems of Logic Based on Ordinals (1938)
Doctoral advisor	Alonzo Church[2]
Doctoral students	

    Robin Gandy[2][3]
    Beatrice Worsley[4]

Signature

Alan Mathison Turing OBE FRS (/ˈtjʊərɪŋ/; 23 June 1912 – 7 June 1954) was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist.[5] Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.[6][7][8] He is widely considered to be the father of theoretical computer science and artificial intelligence.[9]

Born in Maida Vale, London, Turing was raised in southern England. He graduated from King's College, Cambridge, with a degree in mathematics. Whilst he was a fellow at Cambridge, he published a proof demonstrating that some purely mathematical yes–no questions can never be answered by computation. He defined a Turing machine and proved that the halting problem for Turing machines is undecidable. In 1938, he earned his PhD from the Department of Mathematics at Princeton University.

During the Second World War, Turing worked for the Government Code and Cypher School at Bletchley Park, Britain's codebreaking centre that produced Ultra intelligence. For a time he led Hut 8, the section that was responsible for German naval cryptanalysis. Here, he devised a number of techniques for speeding the breaking of German ciphers, including improvements to the pre-war Polish bomba method, an electromechanical machine that could find settings for the Enigma machine. Turing played a crucial role in cracking intercepted coded messages that enabled the Allies to defeat the Axis powers in many crucial engagements, including the Battle of the Atlantic.[10][11]

After the war, Turing worked at the National Physical Laboratory, where he designed the Automatic Computing Engine, one of the first designs for a stored-program computer. In 1948, Turing joined Max Newman's Computing Machine Laboratory at the Victoria University of Manchester, where he helped develop the Manchester computers[12] and became interested in mathematical biology. He wrote a paper on the chemical basis of morphogenesis[13][1] and predicted oscillating chemical reactions such as the Belousov–Zhabotinsky reaction, first observed in the 1960s. Despite these accomplishments, Turing was never fully recognised in Britain during his lifetime because much of his work was covered by the Official Secrets Act.[14]

Turing was prosecuted in 1952 for homosexual acts. He accepted hormone treatment with DES, a procedure commonly referred to as chemical castration, as an alternative to prison. Turing died on 7 June 1954, 16 days before his 42nd birthday, from cyanide poisoning. An inquest determined his death as a suicide, but it has been noted that the known evidence is also consistent with accidental poisoning. Following a public campaign in 2009, British prime minister Gordon Brown made an official public apology on behalf of the government for "the appalling way [Turing] was treated". Queen Elizabeth II granted a posthumous pardon in 2013. The term "Alan Turing law" is now used informally to refer to a 2017 law in the United Kingdom that retroactively pardoned men cautioned or convicted under historical legislation that outlawed homosexual acts.[15]

Turing has an extensive legacy with statues of him and many things named after him, including an annual award for computer science innovations. He appears on the current Bank of England £50 note, which was released on 23 June 2021 to coincide with his birthday. A 2019 BBC series, as voted by the audience, named him the greatest person of the 20th century. `;

//Регулярні вирази
/*
навчальні заклади (наприклад King's College, Cambridge)
дати (наприклад 8 January 2015)
сноски у квадратних скобках (наприклад [22])
твори у лапках (наприклад "The Mind and the Computing Machine: Alan Turing
*/

const reSchool = /\b(?:School|College|Institute|University)\b(?:\s\w+)+|\b(?:\s\w+)\s\b(?:School|College|Institute|University)/gm;

//const reData = /(\d\d?\s\w+\s\d{4})|\d{4}/g;
//const reData = /(\d\d?\s[January, Febrary, March, April, May, June,July, August, September, October, November, December]+\s\d{4})|\d{4}/g;
const reData = /(\d\d?\s[A-Z][a-z]+\s\d{4})|\d{4}/g;

const reLink = /\[\d+\]/g;
const reBook = /\"[^\"]+\"/g;

const schools = text.match(reSchool);
const datas = text.match(reData);
const links = text.match(reLink);
const books = text.match(reBook);

console.log('навчальні заклади - ', schools);
console.log('дати или года - ', datas);
console.log('сноски у квадратних скобках - ', links);
console.log('твори у лапках - ', books);
