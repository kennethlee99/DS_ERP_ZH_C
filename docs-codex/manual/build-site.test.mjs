import assert from 'node:assert/strict';
import { test } from 'node:test';

import { orderMarkdownFiles, renderMarkdown } from './build-site.mjs';

test('renderMarkdown keeps indented continuation lines inside list items', () => {
  const markdown = [
    '- Create or update parts. These are owned by [Production engineer](production-engineer.md),',
    '  [Planner](planner.md), or administrator.',
    '- Define inspection sheets.',
    '',
    '1. Confirm the visible action,',
    '   then keep the screenshot.',
    '2. Recheck the refreshed row.',
  ].join('\n');

  const html = renderMarkdown(markdown, 'en/03-by-role/operator.md');

  assert.match(
    html,
    /<ul><li>Create or update parts\. These are owned by <a href="production-engineer\.html">Production engineer<\/a>, <a href="planner\.html">Planner<\/a>, or administrator\.<\/li><li>Define inspection sheets\.<\/li><\/ul>/,
  );
  assert.match(
    html,
    /<ol><li>Confirm the visible action, then keep the screenshot\.<\/li><li>Recheck the refreshed row\.<\/li><\/ol>/,
  );
  assert.doesNotMatch(html, /<p><a href="planner\.html">Planner<\/a>/);
});

test('orderMarkdownFiles keeps manual navigation in task order before alphabetic fallback', () => {
  const input = [
    'en/10-production/queue-system.md',
    'index.md',
    'en/03-by-role/operator.md',
    'en/01-workflows/planner-cold-start.md',
    'en/00-start-here.md',
    'en/03-by-role/planner.md',
    'en/01-workflows/admin-setup-checklist.md',
    'en/10-production/production-orders.md',
  ];

  assert.deepEqual(orderMarkdownFiles(input), [
    'index.md',
    'en/00-start-here.md',
    'en/01-workflows/planner-cold-start.md',
    'en/01-workflows/admin-setup-checklist.md',
    'en/03-by-role/planner.md',
    'en/03-by-role/operator.md',
    'en/10-production/production-orders.md',
    'en/10-production/queue-system.md',
  ]);
});
