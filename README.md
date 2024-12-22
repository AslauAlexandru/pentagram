# Pentagram: Instagram, but with AI Images

## Getting Started

First, clone the GitHub repository:
```bash
git clone https://github.com/AslauAlexandru/pentagram
```

or 

```bash
git clone https://github.com/team-headstart/pentagram.git
```

Then, navigate to the project directory:

```bash
cd pentagram
```

Then, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

- Take a look at the TODOs in the repo, namely:

    - `src/app/page.tsx`: This is where the user can input their prompt and generate an image. Make sure to update the UI and handle the API response to display the images generated

    - `src/app/api/generate-image/route.ts`: This is where the image generation API is implemented. Make sure to call your image generation API from Modal here


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## From challenges
**From challenges I have done this challenge**:
Ensuring the hosted image generation model operates within low-latency thresholds (<2 seconds) while handling multiple concurrent requests.
You can check [here]() and this is the name of script ``` text_to_image.py ```.
# Project statement

For this project, you are tasked with building an Instagram clone, 
where instead of users uploading pictures themselves, they can generate images 
with text prompts. Instead of using existing image generation APIs, 
you will have to host an image generation model yourself on serverless GPUs and 
ensure low latency for a smooth user experience.

**Getting Started**:

- Learn how Modal works here https://modal.com/docs/guide , along with the other resources provided above
- Set up the backend API using Modal that generates images from a text prompt
- Clone the GitHub repo here https://github.com/team-headstart/pentagram/tree/main for the web app where users can generate images, and take a look at the TODOs in the codebase

**Project Requirements**:

- Host an image generation model (e.g., Stable Diffusion) on serverless GPUs through Modal, ensuring low-latency performance for smooth user experience.
- Create a web app that allows users to generate images from text prompts, manage their creations, and interact socially through likes, comments, and sharing features.
- Incorporate intuitive UI/UX design, authentication, and efficient image management with prompt histories.

**Challenges**:

- Ensuring the hosted image generation model operates within low-latency thresholds (<2 seconds) while handling multiple concurrent requests
- Managing the dynamic scaling of GPU resources to handle demand spikes without exceeding cost or causing performance bottlenecks.
- Add the ability to search for images semantically
- Prevent harmful or inappropriate content from being generated
- Build a recommendation system that creates personalized feeds for users, balancing new content discovery with user preferences

**Resources**:

[Getting started with Modal](https://modal.com/docs/examples/hello_world)

[Building an Image Generation Pipeline on Modal](https://www.youtube.com/watch?v=sHSKArbiKmU)

[Run Stable Diffusion as a CLI, API, and web UI](https://modal.com/docs/examples/text_to_image)

[Midjourney Examples](https://www.midjourney.com/explore?tab=top)

[NVIDIA GPU Comparison](https://www.digitalocean.com/community/tutorials/h100_vs_other_gpus_choosing_the_right_gpu_for_your_machine_learning_workload)

[Modal Playground](https://modal.com/playground/get_started)

[Modal Cold Start Guide](https://modal.com/docs/guide/cold-start)

[Image Generation Models](https://huggingface.co/models?pipeline_tag=text-to-image)

[Modal Web Endpoints](https://modal.com/docs/guide/webhooks)





