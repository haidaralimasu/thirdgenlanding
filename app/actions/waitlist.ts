"use server";

export async function submitToWaitlist(email: string) {
  // Mock database save - replace with actual database logic
  console.log("Saving to waitlist:", email);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock success response
  return {
    success: true,
    message: "Welcome to the resistance.",
  };
}
