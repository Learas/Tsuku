/* Alles wird in eine anonyme (unbenannte) Funktion gepackt, 
damit unsere Variablen nicht mit Variablen anderer Frameworks kollidieren können.
Diese Funktion wird sofort aufgerufen, damit der Code direkt ausgeführt wird.  */
(function($) {
    // ####### Beispiele und API zu jquery: https://api.jquery.com/ 
    //
    // $ ist eine Referenz auf jQuery. Das haben wir für bootstrap zuvor eingebunden
    // Dieser Code wird ausgeführt, wenn der Body fast fertig gerendert ist. 
    // Unsere forms sind daher bereits existent!
    // Wir können sie mittels jquery sehr einfach selektieren. Ähnlich wie "document.getElementById"
    // können wir ids, Klassen und diverse andere Eigenschaften zur Selektion verwenden
    // 
    // Elemente, welche jquery erzeugt, sollten ebenfalls mit $ benannt werden
    const $staticForm = $('.form-group.static');
    
    // Schaue mal die die javascript console deines browsers, dann siehst du das Element
    console.log('#1 Selektion der statischen Form');
    console.log($staticForm);
    
    // Die form ist jedoch nicht das, was wir selektieren wollen. Wir benötigen das select Element. 
    // Entweder wir suchen innerhalb der Form nach dem Element. 
    //
    // Kurz zu Selektoren
    //
    // "#" bedeutet wir suchen nach einer id
    // "." bedeutet wir suchen nach einer Klasse
    
    // Wenn man ein Leerzeichen zwischen den Selektoren 
    // setzt bspw $('#meineId .meineKlasse') sucht jquery nach einer Klasse innerhalb von id 
    // <div id="meineId">...<div class="meineKlasse">Dieses Element wird selektiert</div></div>. 
    //
    // Sucht man $('#meineId.meineKlasse')
    // wird nach einer Klasse neben einer id gesucht. Also nach 
    // <div class="meineKlasse" id="meineId">Dieses Element wird selektiert</div>
    let $staticFormSelect = $staticForm.find('#sel1');
    console.log('#2 Selektion von select innherhalb der statischen Form');
    console.log($staticFormSelect);

    // Wir können das select natürlich auch direkt selektieren, dank der eindeutigen id!
    $staticFormSelect = $('#sel1');
    console.log('#3 Direkte Selektion');
    console.log($staticFormSelect);

    // Als nächstes lassen wir uns die Werte ausgeben
    console.log('#4 Werte, statisches select');
    $staticFormSelect
        .find('option')
        .each(function() {
            console.log($(this).val());
        });

    // Wenn wir die Werte speichern wollen, können wir das so erledigen
    console.log('#5 Werte in Variable, statisches select');
    const values = $staticFormSelect
        .find('option')
        .map(function() { 
            return $(this).val(); 
        })
        .toArray();
    console.log(values);

    // Jetzt wollen wir die Werte, welche wir anbieten,  dynamisch definieren.
    // Hierfür holen wir uns zunächst das entsprechende select Element

    const $dynamicFormSelect = $('#sel2');

    // Wie wir sehen, gibt es initial keine Werte, daher wird "each" nicht aufgerufen und
    // das log bleibt leer
    console.log('#6 Werte, dynamisches select');
    $dynamicFormSelect
        .find('option')
        .each(function() {
            console.log($(this).val());
        });

    // Also füllen wir eine liste von Werten in das select
    // Diese Werte definieren wir in einer variable, genauer in einem Array

    const dynamicValues = ['erster Wert', 'zweiter Wert', 'dritter Wert'];

    dynamicValues.forEach((value) => {
        // Danach generieren wir dynamische <option>s
        // und fügen diese direkt in dynamic select ein
        $('<option>')
            .val(value)
            .text(value)
            .appendTo($dynamicFormSelect);
    });

    // Und nun ein weiterer Blick in die aktuellen Werte des Elements
    // Voila!
    console.log('#7 Werte, dynamisches select');
    $dynamicFormSelect
        .find('option')
        .each(function() {
            console.log($(this).val());
        });

    // Nun beschäftigen wir uns kurz mit Events. Durch das EventSystem können Aktionen
    // gestartet werden, wenn ein bestimmtes Ereignis eingetreten ist. Bspw. Ein Nutzer klickt auf
    // einen Button.
    // 
    // Zuvor muss man auf ein Ereignis lauschen. Hierfür benötigt man ein Element und einen Event
    // Namen. Wir benutzen das "change" event. Events gibt es eine ganze Menge. Einfach mal googeln.
    // Mit "on" beginnt man das lauschen.

    $staticFormSelect.on('change', function(e) {
        console.log('1. "change" event auf staticFormSelect');
    });

    // Das geht auch Mehrfach. Diesmal mit dem jquery shortcut
    $staticFormSelect.change(function(e) {
        console.log('2. Nochmal "change" event auf staticFormSelect');
    });

    // Einfach in die console schauen, wenn eine Auswahl getroffen wird.

    // Natürlich kann man auch die Werte auslesen. 
    // Dafür definieren wir uns zunächst eine kleine Funktion
    function getSelectedValue($selectElement) {
        return $selectElement.children('option:selected').val();
    }

    // und setzen den nächsten Event Listener
    $staticFormSelect.change(function(e) {
        const selectedValue = getSelectedValue($(e.target));
        alert(`"${selectedValue}" ausgewählt`);
    });

    // und ebenso an das dynamic select
    $dynamicFormSelect.change(function(e) {
        const selectedValue = getSelectedValue($(e.target));
        alert(`"${selectedValue}" ausgewählt`);
    });

})(window.jQuery);
