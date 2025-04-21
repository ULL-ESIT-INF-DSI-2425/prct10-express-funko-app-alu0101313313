import { describe, test, expect } from 'vitest';
import { loadNotes, readNote } from '../../src/mod/notes.js';

describe('loadNotes tests', () => {

  test('should load notes from file', () => {
    return loadNotes('public/notes/notes.json').
    then((data) => {
      const notes = JSON.parse(data);
      expect(notes).toBeDefined();
    });
  });
});