/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 ********************************************************************************/

/**
 * Universal router routing Turso storage request methods safely.
 *
 * Under the hood, Turso utilizes the LibSQL/SQLite engine dialect. Rather than
 * re-implementing identical query handling logic, this wrapper delegates request
 * execution directly to `@cocreate/sqlite`.
 *
 * All operations conform to CoCreate's unified, object-oriented JSON protocol
 * (e.g., `object.create`, `object.read`, `object.update`, `object.delete`).
 * This standardized protocol operates across all database drivers and third-party
 * APIs, allowing seamless, parallel multi-database state routing across backends
 * without exposing underlying engine-specific APIs to the application layer.
 */
import sqlite from "@cocreate/sqlite";

/**
 * Route a CoCreate CRUD request to the matching database, array, or object operation.
 *
 * @public
 * @environment server
 */
export const send = (data) => {
    return sqlite.send(data);
};

export default { send };

/**
 * Lightweight Turso CRUD wrapper and multi-tenant state routing client for the CoCreate ecosystem.
 *
 * @module turso
 * @environment server
 */
