<template>
    <div class="btn grade-btn" @mousedown="downloadFile">
        <img src="/src/assets/images/png/file.png" alt="image" />
        <div class="text">Download</div>
      </div>
  </template>
  
  <script>
  import html2pdf from "html2pdf.js";
  
  export default {
    props: ["dom", "name"],
    methods: {
      downloadFile() {
        const me = this;
  
        const invoice = document.querySelector(me.dom);
        var opt = {
          margin: 0,
          filename: me.name,
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
          jsPDF:{ unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
      },
    },
  };
  </script>