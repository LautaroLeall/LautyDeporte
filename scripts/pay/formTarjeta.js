// formTarjeta.js

export function generarFormularioTarjeta(formContainer, tipo, procesarPago) {
    const label = tipo === "credito" ? "Crédito" : "Débito";

    formContainer.innerHTML = `
        <form id="form-tarjeta" class="bg-secondary bg-opacity-10 p-4 rounded-3 border border-secondary">
            <h6 class="text-info fw-bold mb-3">Pago con Tarjeta (${label})</h6>
            <div class="mb-3">
                <label class="form-label">Número de tarjeta</label>
                <input type="text" id="numero" class="form-control" placeholder="XXXX XXXX XXXX XXXX" maxlength="19">
            </div>
            <div class="mb-3 d-flex gap-3">
                <div class="w-50">
                    <label class="form-label">Vencimiento</label>
                    <input type="text" id="vencimiento" class="form-control" placeholder="MM/AA" maxlength="5">
                </div>
                <div class="w-50">
                    <label class="form-label">CVV</label>
                    <input type="text" id="cvv" class="form-control" placeholder="XXX" maxlength="3">
                </div>
            </div>
            <button type="submit" class="btn btn-success">Confirmar Pago</button>
        </form>
    `;

    setTimeout(() => {
        const form = document.getElementById("form-tarjeta");
        const numero = document.getElementById("numero");
        const vencimiento = document.getElementById("vencimiento");
        const cvv = document.getElementById("cvv");

        // Aplicar estilos visuales según validación
        const marcarInput = (input, valido) => {
            input.classList.remove("is-valid", "is-invalid");
            input.classList.add(valido ? "is-valid" : "is-invalid");
        };

        numero.addEventListener("input", () => {
            numero.value = numero.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
            marcarInput(numero, /^\d{4} \d{4} \d{4} \d{4}$/.test(numero.value));
        });

        vencimiento.addEventListener("input", () => {
            let value = vencimiento.value.replace(/\D/g, "");
            if (value.length > 2) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4);
            }
            vencimiento.value = value.slice(0, 5);
            marcarInput(vencimiento, /^\d{2}\/\d{2}$/.test(vencimiento.value));
        });

        cvv.addEventListener("input", () => {
            cvv.value = cvv.value.replace(/\D/g, "").slice(0, 4);
            marcarInput(cvv, /^\d{3,4}$/.test(cvv.value));
        });

        // Validación final al enviar
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const tarjeta = numero.value.replace(/\s/g, "");
            const venc = vencimiento.value;
            const cvvValue = cvv.value.trim();

            const [mm, aa] = venc.split("/").map(Number);
            const now = new Date();
            const currentYear = Number(now.getFullYear().toString().slice(2));
            const currentMonth = now.getMonth() + 1;

            if (
                !/^\d{16}$/.test(tarjeta) ||
                !/^\d{2}\/\d{2}$/.test(venc) ||
                aa < currentYear || (aa === currentYear && mm < currentMonth) || mm < 1 || mm > 12 ||
                !/^\d{3,4}$/.test(cvvValue)
            ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el formulario',
                    text: 'Verifica que todos los campos estén correctamente completados.'
                });
                return;
            }

            procesarPago(`Tarjeta ${label}`, {
                numero: numero.value,
                vencimiento: venc,
                cvv: cvvValue,
            });
        });
    }, 100);
}
