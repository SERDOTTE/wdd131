// Atualiza o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  // Recupera o contador do localStorage e converte para número
  let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

  // Incrementa o contador e salva no localStorage
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);

  // Atualiza o rodapé com o número total de avaliações
  const footer = document.querySelector("footer");
  if (footer) {
      const reviewCounter = document.createElement("p");
      reviewCounter.textContent = `Total Reviews Submitted: ${reviewCount}`;
      footer.appendChild(reviewCounter);
  }

  // Popula o dropdown de produtos
  const selectElement = document.getElementById("productSelect");
  if (selectElement) {
      const products = [
          { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
          { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
          { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
          { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
          { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
      ];

      products.forEach(product => {
          let option = document.createElement("option");
          option.value = product.id;
          option.textContent = product.name;
          selectElement.appendChild(option);
      });
  }
});
