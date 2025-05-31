/**
 * @copyright 2025 fafarabbani
 * @license
 */

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-2 px-4 text-center text-gray-500 dark:text-white">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Fafa Rabbani. All rights reserved.
      </small>
    </footer>
  );
}
