document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const sayfa1 = document.getElementById("sayfa1");
    const sayfa2 = document.getElementById("sayfa2");
    const tablolar = document.getElementById("tablo");
    const geriButton = document.getElementById("geriButton");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const rows = parseInt(document.getElementById("rows").value);
        const columns = parseInt(document.getElementById("columns").value);
        createTable(rows, columns);
        // Sayfaları değiştir
        sayfa1.style.display = "none";
        sayfa2.style.display = "block";
    });

    geriButton.addEventListener("click", () => {
        sayfa1.style.display = "block";
        sayfa2.style.display = "none";
    });

    hesaplaButton.addEventListener("click", () => {
        maxdegerler();
    });

    function createTable(rows, columns) {
        let tableHTML = "<table>";
        // Tablo başlıkları
        tableHTML += "<thead><tr>";
        // Seçenek sütunu başlığı
        tableHTML += `<th></th>`;
        for (let i = 0; i < columns; i++) {
            tableHTML += `
                <th>
                    ${i + 1}. Doğal Şart 
                    (<input type="text" class="header-input" placeholder="Metin girin">)
                </th>`;
        }
        tableHTML += "</tr></thead>";
        // Tablo gövdesi
        tableHTML += "<tbody>";
        for (let i = 0; i < rows; i++) {
            tableHTML += "<tr>";
            // Seçenek sütunu
            tableHTML += `
                <td>
                    ${i + 1}. Seçenek 
                    (<input type="text" class="option-input" placeholder="Metin girin">)
                </td>`;
            for (let j = 0; j < columns; j++) {
                tableHTML += `<td><input type="number" class="table-input" placeholder="Sayı"></td>`;
            }
            tableHTML += "</tr>";
        }
        tableHTML += "</tbody></table>";
        tablolar.innerHTML = tableHTML;
    }

        function maxdegerler() {
            const rows = document.querySelectorAll("tbody tr");
            let maxValues = [];
            let maxSecenek=[];
            rows.forEach((row) => {
                const inputs = row.querySelectorAll(".table-input");
                const optionInput = row.querySelector(".option-input").value;
                let rowMax = -Infinity;
                inputs.forEach((input) => {
                    const value = parseFloat(input.value) || 0;
                    if (value > rowMax) {
                        rowMax = value;
                    }
                });
                maxValues.push(rowMax);
                maxSecenek.push(optionInput);
            });
                
            const enmaxdeger = Math.max(...maxValues);
            const enmaxIndex = maxValues.indexOf(enmaxdeger);
            const enmaxSecenek = maxSecenek[enmaxIndex];
            alert(`Her satırdaki en büyük sayılar: ${maxValues.join(", ")}\nEn büyük değer: ${enmaxdeger}\nBu değer "${enmaxSecenek}" seçeneğine aittir.` );
    }
});
