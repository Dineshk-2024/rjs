import React from "react";
let Employee=()=>{
    let employee=[{"Eid":1,"Ename":"Steve","Email":"sbourke0@utexas.edu"},
      {"Eid":2,"Ename":"Marge","Email":"mhembling1@sohu.com"},
      {"Eid":3,"Ename":"Yevette","Email":"ypovele2@sciencedirect.com"},
      {"Eid":4,"Ename":"Staford","Email":"srossbrook3@scribd.com"},
      {"Eid":5,"Ename":"Heddi","Email":"hcline4@domainmarket.com"},
      {"Eid":6,"Ename":"Robbie","Email":"rkosel5@is.gd"},
      {"Eid":7,"Ename":"Mohandas","Email":"mdoncaster6@who.int"},
      {"Eid":8,"Ename":"Latisha","Email":"lhorlick7@google.fr"},
      {"Eid":9,"Ename":"Ora","Email":"oinnott8@cisco.com"},
      {"Eid":10,"Ename":"Hatti","Email":"hramshay9@seesaa.net"},
      {"Eid":11,"Ename":"Car","Email":"clouiseta@upenn.edu"},
      {"Eid":12,"Ename":"Cheri","Email":"crosenfeldb@unesco.org"},
      {"Eid":13,"Ename":"Margo","Email":"mnormanvillc@webeden.co.uk"},
      {"Eid":14,"Ename":"Cirillo","Email":"cmalliad@bandcamp.com"},
      {"Eid":15,"Ename":"Freemon","Email":"fmcnaye@spiegel.de"},
      {"Eid":16,"Ename":"Olimpia","Email":"oclubleyf@telegraph.co.uk"},
      {"Eid":17,"Ename":"Tally","Email":"tmatkovicg@is.gd"},
      {"Eid":18,"Ename":"Jolynn","Email":"jdewerh@biblegateway.com"},
      {"Eid":19,"Ename":"Mareah","Email":"mbearfooti@bizjournals.com"},
      {"Eid":20,"Ename":"Maggy","Email":"mbadcockj@w3.org"},
      {"Eid":21,"Ename":"Fabiano","Email":"fgatenbyk@ted.com"},
      {"Eid":22,"Ename":"Veriee","Email":"vjahnkel@tmall.com"},
      {"Eid":23,"Ename":"Grantham","Email":"gtaborrem@reverbnation.com"},
      {"Eid":24,"Ename":"Brose","Email":"bwycliffen@youku.com"},
      {"Eid":25,"Ename":"Cherice","Email":"cbredburyo@ucoz.ru"},
      {"Eid":26,"Ename":"Evy","Email":"emccomishp@amazon.com"},
      {"Eid":27,"Ename":"Michaeline","Email":"mcutrissq@bandcamp.com"},
      {"Eid":28,"Ename":"Opal","Email":"ostannasr@boston.com"},
      {"Eid":29,"Ename":"Guthrey","Email":"gbathersbys@weebly.com"},
      {"Eid":30,"Ename":"Dilly","Email":"dyarrellt@businessinsider.com"},
      {"Eid":31,"Ename":"Nanine","Email":"nwicklingu@admin.ch"},
      {"Eid":32,"Ename":"Honor","Email":"hrozeav@discuz.net"},
      {"Eid":33,"Ename":"Tammy","Email":"tdykasw@ox.ac.uk"},
      {"Eid":34,"Ename":"Bowie","Email":"bgammetx@nymag.com"},
      {"Eid":35,"Ename":"Keslie","Email":"kalyutiny@surveymonkey.com"},
      {"Eid":36,"Ename":"Laryssa","Email":"lgatmanz@posterous.com"},
      {"Eid":37,"Ename":"Pandora","Email":"ptindley10@google.ru"},
      {"Eid":38,"Ename":"Blair","Email":"bkubach11@xrea.com"},
      {"Eid":39,"Ename":"Sela","Email":"skimmel12@hc360.com"},
      {"Eid":40,"Ename":"Velvet","Email":"vsallter13@parallels.com"},
      {"Eid":41,"Ename":"Merilee","Email":"mtudbald14@usa.gov"},
      {"Eid":42,"Ename":"Melisande","Email":"msmalman15@squidoo.com"},
      {"Eid":43,"Ename":"Sampson","Email":"smcsaul16@upenn.edu"},
      {"Eid":44,"Ename":"Emlynne","Email":"estebbings17@bbc.co.uk"},
      {"Eid":45,"Ename":"Pearl","Email":"parchdeacon18@diigo.com"},
      {"Eid":46,"Ename":"Keith","Email":"kschanke19@who.int"},
      {"Eid":47,"Ename":"Jared","Email":"jwyvill1a@army.mil"},
      {"Eid":48,"Ename":"Waring","Email":"wlanning1b@fotki.com"},
      {"Eid":49,"Ename":"Lenora","Email":"lhitzmann1c@scribd.com"},
      {"Eid":50,"Ename":"Gallagher","Email":"gchurchley1d@pbs.org"},
      {"Eid":51,"Ename":"Gaylord","Email":"gruggen1e@typepad.com"},
      {"Eid":52,"Ename":"Ignaz","Email":"iclavering1f@ibm.com"},
      {"Eid":53,"Ename":"Rorke","Email":"rpethrick1g@amazonaws.com"},
      {"Eid":54,"Ename":"Humphrey","Email":"hcastelli1h@census.gov"},
      {"Eid":55,"Ename":"Emmit","Email":"ebowdrey1i@usgs.gov"},
      {"Eid":56,"Ename":"Dermot","Email":"drouzet1j@biblegateway.com"},
      {"Eid":57,"Ename":"Alva","Email":"afenelow1k@barnesandnoble.com"},
      {"Eid":58,"Ename":"Sioux","Email":"svasnetsov1l@ycombinator.com"},
      {"Eid":59,"Ename":"Selinda","Email":"shalm1m@cloudflare.com"},
      {"Eid":60,"Ename":"Ginelle","Email":"gpyford1n@topsy.com"},
      {"Eid":61,"Ename":"Eleonora","Email":"ejobey1o@google.ca"},
      {"Eid":62,"Ename":"Melodee","Email":"mibbotson1p@pcworld.com"},
      {"Eid":63,"Ename":"Dionne","Email":"dduckhouse1q@goo.ne.jp"},
      {"Eid":64,"Ename":"Misty","Email":"mcompson1r@sciencedirect.com"},
      {"Eid":65,"Ename":"Zacharie","Email":"zhouliston1s@mozilla.com"},
      {"Eid":66,"Ename":"Ingemar","Email":"isnarr1t@yahoo.co.jp"},
      {"Eid":67,"Ename":"Avrom","Email":"aschonfelder1u@slate.com"},
      {"Eid":68,"Ename":"Ad","Email":"adamiata1v@networksolutions.com"},
      {"Eid":69,"Ename":"Nat","Email":"npolgreen1w@smugmug.com"},
      {"Eid":70,"Ename":"Rodina","Email":"rhesbrook1x@nymag.com"}]
  return <div>
    <table border={2}>
        <thead>
            <tr className="text-danger">
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                employee.map((emp)=>{
                  return <tr key={emp.id} className="text-primary">
                    <td>{emp.Eid}</td>
                    <td>{emp.Ename}</td>
                    <td>{emp.Email}</td>
                  </tr>
                })
            }
        </tbody>
    </table>
  </div>
    
}
export default Employee
