function takeScreenshot(divId) {
    const element = document.getElementById(divId);
    if (element) {
      html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = `${divId}-gm.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    } else {
      console.error(`Element with ID "${divId}" not found.`);
    }
  }