var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 91],
    ['LRS 222', 49506, 3250],
    ['LRS 223', 0, 0]
];
var headersPolice = ['Valstybiniai numeriai', 'Nuvaziuotas atstumas, km', 'Sugaistas laikas, h', 'Vidutinis greitis, km/h'];

createTable(auto, headersPolice);
function createTable(auto, headersPolice){
    var text = '';

    text += '<table border="5">';
    text += '<thead>';
    text += '<tr>';
    for(var i =0; i<headersPolice.length; i++){
        text += '<td>' + headersPolice[i] + '</td>';

    }
    text += '</tr>';
    text += '</thead>';
    text += '<tbody>';
    for(var i=0; i < auto.length; i++){
        text += '<tr>';
        var greitis, laikas;
        for (var j = 0; j < auto[i].length; j++){
            text += '<td>' ;
            switch (j){
                case 1:
                    atstumas = auto [i][j]/1000;
                    text += atstumas.toFixed(2);
                    break;
                case 2:
                    laikas = auto [i][j]/3600;
                    text += laikas.toFixed(2);
                    break;
                default:
                    text += auto [i][j];
            }
            text += '</td>';
        }
        text += '<td>' + (atstumas / laikas).toFixed(0) + '</td>';
        text += '</tr>';

    }
    text += '</tbody>';
    text += '</table>';

    document.querySelector('.resultTable').innerHTML = text;
}