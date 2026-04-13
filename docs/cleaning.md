# :material-broom: Cleaning Module Documentation

This document provides an overview and user guide for the Cleaning Module of the Mixer application. The cleaning module ensures that the beverage dispensing pipes and pots are maintained in a hygienic state.

## Overview

The Cleaning Module allows users to perform routine and deep cleaning of the machine's dispensing channels (pots). It tracks the last cleaning time for each pot and provides a guided multi-step deep cleaning process.

## Main Features

![Cleaning Status Dashboard](assets/images/placeholder.png)
### 1. Cleaning Status Dashboard
The main cleaning screen displays all pots and their current cleaning status:
- **Pot Information:** Displays pot number and the name of the assigned ingredient.
- **Last Cleaned Timestamp:** Shows the exact date and time the pot was last cleaned.
- **Status Indicators:**
  - **Green:** Cleaned within the last 24 hours.
  - **Orange/Warning:** Not cleaned for more than 24 hours.
  - **Red/Danger:** Never cleaned or needs immediate attention.

### 2. Selection and Batch Cleaning
Users can select individual pots or use the "Select All" feature to perform cleaning on multiple channels simultaneously.

### 3. Deep Cleaning Process
Deep cleaning is a thorough sanitation process consisting of three main stages:

![Deep Cleaning Stage 1](assets/images/placeholder.png)
#### Stage 1: Empty the Pipes (Rinse)
- **Purpose:** Uses warm water to rinse out any residual liquid from the pipes.
- **Adjustable Parameter:** **Flush Time** (0 to 20 seconds).
- **Instruction:** Add warm water into the pots before starting.

![Deep Cleaning Stage 2](assets/images/placeholder.png)
#### Stage 2: Disinfection (Soak)
- **Purpose:** Uses disinfectant to soak the inner walls of the pipes to ensure thorough sanitation.
- **Adjustable Parameters:**
  - **Flush Time:** Duration for initial disinfectant flow.
  - **Soak Time:** Duration the disinfectant remains in the pipes (up to 5 minutes).
- **Cycles:** This step can be repeated multiple times for better results.

![Deep Cleaning Stage 3](assets/images/placeholder.png)
#### Stage 3: Final Rinse
- **Purpose:** Uses fresh drinking water to flush out any remaining disinfectant from the pipes.
- **Adjustable Parameter:** **Flush Time**.

## User Instructions

### How to start a Deep Clean
1. Navigate to the **Cleaning** tab from the main navigation.
2. **Select Pots:** Tap on the pots you wish to clean. You can also use "Select All".
3. Tap **Start Cleaning**.
4. **Step 0 (Empty Pipes):** 
   - Fill the selected pots with warm water.
   - Adjust the flush time if necessary.
   - Tap **Start**.
   - Wait for the countdown to finish.
5. **Step 1 (Deep Clean/Disinfection):**
   - Fill the selected pots with disinfectant solution.
   - Adjust both Flush and Soak times.
   - Tap **Start [Cycle X]**.
   - After a cycle finishes, you can tap **Start [Cycle X+1]** to repeat or **Done** to move to the final stage.
6. **Step 2 (Final Rinse):**
   - Fill the pots with fresh drinking water.
   - Adjust the flush time.
   - Tap **Start**.
7. **Completion:** Once all steps are finished, the system will update the "Last Cleaned" timestamp for all selected pots.

## Safety & Maintenance Tips
- It is recommended to perform cleaning at least once every 24 hours to maintain beverage quality and hygiene.
- Always ensure you have the appropriate cleaning agents (warm water, disinfectant, fresh water) ready for each step.
- Do not interrupt the cleaning process unless necessary. If paused, remember to resume to ensure the cycle completes.
