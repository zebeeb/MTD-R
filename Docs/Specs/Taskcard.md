# Task Card PRD

## Overview

The task card represents individual tasks and their details in the to-do application, including title, associated list category, due date, and completion status.

Design in attached_assets/image_1742221195577.png

## General Specifications

- Font Family: Roboto throughout
- Card Layout: Each card contains a title, list indicator with icon, due date, and completion checkbox

## Card Design

- Border Radius: 12px rounded corners
- Vertical Spacing: 5px between cards
- Background Color:
    - With associated list: Same hue as list color with 70% saturation and 7% lightness
    - Without list: #111212
- Padding: Add 16px padding on all sides for content inside card

## Task Title

- Color: #ffffff (white)
- Font Size: 14px
- Font Weight: Medium (500)
- Text Treatment: Single line with ellipsis (...) overflow if content exceeds card width
- Position: Left-aligned, top section of card
- Line Height: 20px
- Maximum width: Approximately 80% of card width to accommodate checkbox

## List Indicator

- Font Size: 9px
- Font Weight: Regular (400)
- Icons: assets/List Icons  
- Display: Icon followed by list name
- Position: Left-aligned, below task title
- Vertical Spacing: 8px below title
- Color Options:
    - #bf2b68 (pink)
    - #17bb7e (green)
    - #1c71c2 (blue)
    - #d14c15 (orange)
    - #c6b413 (yellow)
    - #8318bd (purple)

## Due Date

- Font Size: 9px
- Font Weight: Regular (400)
- Position: Right-aligned, centered vertically in card
- Display Logic:
    - If due today: Show "Today"
    - If due tomorrow: Show "Tomorrow"
    - If due yesterday: Show "Yesterday"
    - Otherwise: Show formatted date (e.g., "9 Mar. 2025")
- Styling Logic:
    - Future or today: Color #a4a4a4 (light gray)
    - Past due: Color #ff1b1b (red), font style italic
    - if no date, don't display a date

## Checkbox

- Size: 24px × 24px
- Border Radius: 5px
- Position: Right-aligned, vertically centered
- Color Logic:
    - With associated list: List color
    - Without list: #bcbdbe (light gray)
- States:
    - Unchecked: Empty box with colored border
    - Checked: Filled box with checkmark icon
- Touch Target: Minimum 44px × 44px for better usability


Optimization Decisions 
1. **Simplification**:
    - Use Tamagui's built-in Card component as base
    - Leverage theme tokens for colors/spacing
    - Use native date formatting initially
2. **Bug Prevention**:
    - Add TypeScript interfaces upfront
    - Add basic error boundary
    - Input validation for dates
    - Default values for missing data
3. **Scalability**:
    - Make list colors configurable via theme
    - Component composition for reusability
    - Keep layout calculations minimal

Implementation Steps & Complexity 📊

1. **Base Structure** (Complexity: 2/5)
    - Create TaskCard component
    - Basic TypeScript interfaces
    - Tamagui Card setup
2. **Title Implementation** (Complexity: 1/5)
    - Single line text
    - Ellipsis handling
    - Font styling
3. **List Indicator** (Complexity: 3/5)
    - Icon integration
    - Color mapping
    - Layout positioning
4. **Due Date** (Complexity: 2/5)
    - Date formatting
    - Conditional styling
    - Position handling
5. **Checkbox** (Complexity: 3/5)
    - Custom checkbox component
    - Touch handling
    - State management
6. **Overall Styling** (Complexity: 2/5)
    - Theme integration
    - Background colors
    - Spacing/padding
7. 6. **Manual testing** 
    - Add dummy data as in the design
    - show the cards in a new tab in the app