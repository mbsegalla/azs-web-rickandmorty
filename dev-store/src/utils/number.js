export function numberToMonetary(value) {
  if (!value || isNaN(value)) {
    return '';
  }
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
