/**
 * @flow
 * @file Editable Skill Keywords card component
 * @author Box
 */

import type { SkillCardEntry } from '../../../../flowTypes';
import type { Pill } from './flowTypes';

/**
 * Converts skill card entries into pills
 *
 * @private
 * @param {Array<Object>} props - keyword entries
 * @return {Array<Object>} pills
 */
const getPills = (keywords: Array<SkillCardEntry> = []): Array<Pill> =>
    keywords.map((keyword: SkillCardEntry, index: number): Pill => ({
        value: index,
        text: ((keyword.text: any): string)
    }));

export default getPills;