import { createClient } from "@supabase/supabase-js";

// Custom fetch with timeout
function fetchWithTimeout(url, options, timeout = 30000) {
  // 30 seconds default
  return new Promise((resolve, reject) => {
    // Set timeout timer
    const timer = setTimeout(() => {
      reject(new Error("Request timed out"));
    }, timeout);

    fetch(url, options).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

const sbApiKey = process.env.SUPABASE_API_KEY;
const sbUrl = process.env.SUPABASE_API_URL;
export const supabaseClient = createClient(sbUrl, sbApiKey, {
  global: { fetch: fetchWithTimeout },
});
