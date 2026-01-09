const btn = document.querySelector(".btn-lexium-ai");
      const intelexium = document.querySelector(".ai-intelexium-frame");
      const agent = document.querySelector(".ai-agent-frame");

      btn.addEventListener("click", () => {
        intelexium.style.display = "none";
        agent.style.display = "block";
      });