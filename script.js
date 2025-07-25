const ENDPOINT = "https://script.google.com/macros/s/AKfycbx-17hkFaaKHyLASwoj816uoMO2_C-PgT4kpdqT4gfkWazUGVbI_M1EaoCuGTwwPhvnNQ/exec";

document.getElementById("delivery-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    date: document.getElementById("date").value,
    customer: document.getElementById("customer").value,
    product: document.getElementById("product").value,
    quantity: document.getElementById("quantity").value,
    unitPrice: document.getElementById("unitPrice").value,
    plate: document.getElementById("plate").value,
    deliveryStatus: document.getElementById("deliveryStatus").value,
    paymentStatus: document.getElementById("paymentStatus").value,
    total: parseFloat(document.getElementById("quantity").value) * parseFloat(document.getElementById("unitPrice").value),
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ contents: data }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    alert("✅ บันทึกสำเร็จ");
  } catch (err) {
    alert("❌ บันทึกล้มเหลว: " + err.message);
  }
});
