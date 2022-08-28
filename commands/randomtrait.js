function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function polRandomizer ()
{

    const titles = ["Full Name", "Draft Value", "Initial State", "Initial Team Color", "Initial Ideology", "Draft Year", "Year Gains Celebrity", "Celebrity", "Charisma", "Debater", "Disharmonious", "Easily Overwhelmed", "Efficient", "Egghead", "Frail", "Integrity", "Iron Fist", "Kingmaker", "Leadership", "Likable", "Manipulative", "Military Leader", "Orator", "Pliable", "Propagandist", "Puritan", "Controversial", "Teflon", "Uncharismatic", "Unlikable", "Hale", "Cosmopolitan", "Provincial", "Lackey", "Magician", "Bookkeeper", "Numberfudger", "Geostrategist", "Naive Strategist", "Domestic Warrior", "Harmonious", "Lowbrow", "Incoherent", "Incompetent", "Delegator", "Micromanager", "Obscure", "Two-faced", "Flipflopper", "Passive", "Predictable", "Cop", "Illicit", "Domestic Apathy", "Late Bloomer", "Overeager", "Jurisprudence", "Crisis Manager", "Crisis Gov", "Crisis Admin", "Decisive General", "Master Kingmaker", "Carpetbagger"];
    let polList =


    polList = shuffleArray(polList);

    let thePol = '';
    let count = 0;
    while(count < titles.length)
    {
        if(polList[0][count] != "")
        {
            let theString = titles[count] + ": " + polList[0][count] + '\n';
            thePol += theString;
            count+=1;
        }
        else
        {
            count+=1;
        }

    }
    thePol = thePol.split("\n");
    retString = "Traits: "
    for(i in thePol)
    {
        if(i >= 6)
        {
            retString = retString + thePol[i].split(":")[0] + ", ";
        }
    }
    thePol = thePol.slice(0, 6).concat(retString.substring(0, retString.length - 4));
    retString = "";
    for(i of thePol)
    {
        retString = retString + i + "\n";
    }
    return retString;
}

module.exports =
    {
        name: 'randomtrait',
        description: 'Gives the user a random politician and their traits',
        execute(message, args)
        {
            message.channel.send(polRandomizer());
        }
    }