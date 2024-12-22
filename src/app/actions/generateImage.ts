"use server";

export async function generateImage(text: string) {
    try {

      const response = await fetch("http://localhost:3000/api/generate-image", { //const response = await fetch("http://localhost:3001/api/generate-image", {...});
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"X-API-SECRET": process.env.API_SECRET || "",
          "X-API-SECRET": process.env.API_KEY || "",
        },
        body: JSON.stringify({ text }),
      });
       
      //const response = await fetch("http://localhost:3000/api/generate-image", {...});
      //const response = await fetch("http://localhost:3001/api/generate-image", {...});
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Server Error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate image",
      };
    }
  }