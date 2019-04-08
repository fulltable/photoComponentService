* {box-sizing: border-box;},

wrapper {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%'
    gridAutoRows: '150px',
    gridGap: '15px',
},

wrapper > div {
  border: '2px solid rgb(233,171,88)',
  border-radius: '5px',
  background-color: 'rgba(233,171,88,5)',
  padding: '1em',
  color: '#d9480f',
},

one {
    gridColumn: '1',
    gridRow: '1',
},

two {
    gridColumn: '1',
    gridRow: '2',
},

three {
    gridColumn: '2',
    gridRow: '1 / 3',
},
wrapper2 {
    gridColumn: '3',
    gridRow: '1 / 3',
    display: 'grid',
   grid-template-columns: '50% 50%'
    grid-auto-rows: '150px',
    grid-gap: '15px',
},

four {
    gridColumn: '1',
    gridRow: '1',
},

five {
    gridColumn: '1',
    gridRow: '2',
},
six {
    gridColumn: '1',
    gridRow: '3',
},
seven {
    gridColumn: '2',
    gridRow: '1',
},

eight {
    gridColumn: '2',
    gridRow: '2',
},
nine {
    gridColumn: '2',
    gridRow: '3',
},